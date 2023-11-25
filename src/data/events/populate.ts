import {
	ALL_REPEAT_MONTHS,
	IOffsetData,
	IRepeatData,
	nativeDayOfWeekFromRepeatDayOfWeek,
	nativeMonthFromRepeatMonth,
	RelativeOffsetDirection,
	RelativeOrder,
	RelativeOrderDatesByWeekday,
	relativeOrderFromOccurrence,
	repeatDayOfWeekFromNativeDayOfWeek,
	RepeatMonth,
	repeatMonthFromNativeMonth,
	RepeatPattern,
	RepeatPatternType
} from '../../models/pattern.js';
import { NativeDayOfWeek, NativeMonth, toOccursOnString } from '../../util/date.js';
import { combinedEvents } from './combined.js';

const populateRelativeOrdersForYear = (year: number) => {
	const relativeOrdersByMonth = new Map<RepeatMonth, RelativeOrderDatesByWeekday>();

	const date = new Date(year, 0, 1);

	while (date.getFullYear() === year) {
		const nativeMonth = date.getMonth() as NativeMonth;
		const nativeDayOfWeek = date.getDay() as NativeDayOfWeek;
		const dayOfMonth = date.getDate();

		const month = repeatMonthFromNativeMonth(nativeMonth);
		if (!relativeOrdersByMonth.has(month)) {
			relativeOrdersByMonth.set(month, new Map());
		}

		const relativeOrderDatesByWeekday = relativeOrdersByMonth.get(month)!;

		const dayOfWeek = repeatDayOfWeekFromNativeDayOfWeek(nativeDayOfWeek);
		if (!relativeOrderDatesByWeekday.has(dayOfWeek)) {
			relativeOrderDatesByWeekday.set(dayOfWeek, new Map());
		}

		const occurrence = relativeOrderFromOccurrence(Math.ceil(dayOfMonth / 7));

		const relativeOrderDates = relativeOrderDatesByWeekday.get(dayOfWeek)!;
		relativeOrderDates.set(occurrence, dayOfMonth);
		relativeOrderDates.set(RelativeOrder.last, dayOfMonth);

		date.setDate(date.getDate() + 1);
	}

	return relativeOrdersByMonth;
};

const resolveMonthsFromPatternMonth = (patternMonth: RepeatMonth): Array<RepeatMonth> => {
	if (patternMonth === RepeatMonth.all) {
		return ALL_REPEAT_MONTHS;
	} else {
		return [patternMonth];
	}
}

const resolveBaseEventDatesFromRepeatData = (relativeOrdersByMonth: Map<RepeatMonth, RelativeOrderDatesByWeekday>, year: number, repeatPattern: RepeatPattern): Array<Date> => {
	if (repeatPattern.type === RepeatPatternType.absolute) {
		const dates: Date[] = [];

		for (const repeatMonth of resolveMonthsFromPatternMonth(repeatPattern.month)) {
			dates.push(new Date(year, nativeMonthFromRepeatMonth(repeatMonth), repeatPattern.day));
		}

		return dates;

	} else if (repeatPattern.type === RepeatPatternType.relative) {
		const dates: Date[] = [];

		for (const repeatMonth of resolveMonthsFromPatternMonth(repeatPattern.month)) {
			const relativeOrderDatesByWeekday = relativeOrdersByMonth.get(repeatMonth);

			if (relativeOrderDatesByWeekday == null) {
				throw new Error(`No relative order dates found for month ${repeatPattern.month}`);
			}

			const relativeOrderDates = relativeOrderDatesByWeekday.get(repeatPattern.dayOfWeek);

			if (relativeOrderDates == null) {
				throw new Error(`No relative order dates found for day of week ${repeatPattern.dayOfWeek}`);
			}

			const dayOfMonth = relativeOrderDates.get(repeatPattern.order);

			if (dayOfMonth == null) {
				continue;
			}

			dates.push(new Date(year, nativeMonthFromRepeatMonth(repeatMonth), dayOfMonth));
		}

		return dates;
	} else if (repeatPattern.type === RepeatPatternType.floating) {
		return repeatPattern.calculateDates?.(
			year,
			(pattern) => resolveBaseEventDatesFromRepeatData(relativeOrdersByMonth, year, pattern)
		) ?? [];
	}

	return [];
}

const resolveChildEventDateFromOffsetPattern = (baseDate: Date, offsetData: IOffsetData): Date | null => {
	if (offsetData.pattern == null) {
		return baseDate;
	}

	if (offsetData.pattern.type === RepeatPatternType.absolute) {
		const date = new Date(baseDate);
		date.setDate(date.getDate() + offsetData.pattern.days);
		return date;
	} else if (offsetData.pattern.type === RepeatPatternType.relative) {
		const date = new Date(baseDate);
		const direction = offsetData.pattern.direction === RelativeOffsetDirection.next ? 1 : -1;
		const dayOfWeek = nativeDayOfWeekFromRepeatDayOfWeek(offsetData.pattern.dayOfWeek);
		const dayOfWeekOffset = (dayOfWeek - date.getDay() + 7) % 7;
		date.setDate(date.getDate() + dayOfWeekOffset + direction * 7);
		return date;
	} else {
		return null;
	}
}

const resolveEventsFromRepeatData = (relativeOrdersByMonth: Map<RepeatMonth, RelativeOrderDatesByWeekday>, year: number, repeatData: IRepeatData): Array<[Date, string]> => {
	const baseDates = resolveBaseEventDatesFromRepeatData(relativeOrdersByMonth, year, repeatData.pattern);

	if (baseDates.length === 0) {
		return [];
	}

	const eventNames: Array<[Date, string]> = [];

	for (const baseDate of baseDates) {
		// Name can be null if the RepeatData is being used only as a base for offset children
		if (repeatData.name != null) {
			eventNames.push([baseDate, repeatData.name]);
		}

		for (const child of repeatData.children ?? []) {
			const childDate = resolveChildEventDateFromOffsetPattern(baseDate, child);

			if (childDate == null) {
				continue;
			}

			eventNames.push([childDate, child.name]);
		}
	}

	return eventNames;
};

export const populateCalendarForYear = (year: number) => {
	const eventsByOccurrenceString = new Map<string, string[]>;
	const relativeOrdersByMonth = populateRelativeOrdersForYear(year);

	for (const event of combinedEvents) {
		const events = resolveEventsFromRepeatData(relativeOrdersByMonth, year, event);
		for (const [eventDate, eventName] of events) {
			const occursOn = toOccursOnString(eventDate);
			if (!eventsByOccurrenceString.has(occursOn)) {
				eventsByOccurrenceString.set(occursOn, []);
			}
			eventsByOccurrenceString.get(occursOn)!.push(eventName);
		}
	}

	return eventsByOccurrenceString;
};
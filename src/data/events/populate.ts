import { combinedEvents } from './combined.js';
import {
	IOffsetData,
	IRepeatData,
	RelativeOffsetDirection,
	RelativeOrder,
	RelativeOrderDatesByWeekday,
	relativeOrderFromOccurrence, RepeatMonth,
	RepeatPattern,
	RepeatPatternType
} from '../../models/pattern.js';
import {
	NativeDayOfWeek,
	NativeMonth,
	NATIVE_MONTHS,
	toOccursOnString
} from '../../util/date.js';

const populateRelativeOrdersForYear = (year: number) => {
	const relativeOrdersByMonth = new Map<NativeMonth, RelativeOrderDatesByWeekday>();

	const date = new Date(year, 0, 1);

	while (date.getFullYear() === year) {
		const month = date.getMonth() as NativeMonth;
		const dayOfWeek = date.getDay() as NativeDayOfWeek;
		const dayOfMonth = date.getDate();

		if (!relativeOrdersByMonth.has(month)) {
			relativeOrdersByMonth.set(month, new Map());
		}

		const relativeOrderDatesByWeekday = relativeOrdersByMonth.get(month)!;
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

const resolveMonthsFromPatternMonth = (patternMonth: RepeatMonth): Array<NativeMonth> => {
	if (patternMonth === 'all') {
		return Object.values(NATIVE_MONTHS);
	} else {
		return [patternMonth];
	}
};

const resolveBaseEventDatesFromRepeatData = (relativeOrdersByMonth: Map<NativeMonth, RelativeOrderDatesByWeekday>, year: number, repeatPattern: RepeatPattern): Array<Date> => {
	if (repeatPattern.type === RepeatPatternType.absolute) {
		const dates: Date[] = [];

		for (const month of resolveMonthsFromPatternMonth(repeatPattern.month)) {
			dates.push(new Date(year, month, repeatPattern.day));
		}

		return dates;

	} else if (repeatPattern.type === RepeatPatternType.relative) {
		const dates: Date[] = [];

		for (const month of resolveMonthsFromPatternMonth(repeatPattern.month)) {
			const relativeOrderDatesByWeekday = relativeOrdersByMonth.get(month);

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

			dates.push(new Date(year, month, dayOfMonth));
		}

		return dates;
	} else if (repeatPattern.type === RepeatPatternType.floating) {
		return repeatPattern.calculateDates?.(
			year,
			(pattern) => resolveBaseEventDatesFromRepeatData(relativeOrdersByMonth, year, pattern)
		) ?? [];
	}

	return [];
};

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
		const dayOfWeek = offsetData.pattern.dayOfWeek;
		const dayOfWeekOffset = (dayOfWeek - date.getDay() + 7) % 7;
		date.setDate(date.getDate() + dayOfWeekOffset + direction * 7);
		return date;
	} else {
		return null;
	}
};

const resolveEventsFromRepeatData = (relativeOrdersByMonth: Map<NativeMonth, RelativeOrderDatesByWeekday>, year: number, repeatData: IRepeatData): Array<[Date, string]> => {
	const baseDates = resolveBaseEventDatesFromRepeatData(relativeOrdersByMonth, year, repeatData.pattern);

	if (baseDates.length === 0) {
		return [];
	}

	const eventNames: Array<[Date, string]> = [];

	for (const baseDate of baseDates) {
		// Name can be null if the RepeatData is being used only as a base for offset children
		if (repeatData.name != null) {
			eventNames.push([
				baseDate,
				repeatData.name
			]);
		}

		for (const child of repeatData.children ?? []) {
			const childDate = resolveChildEventDateFromOffsetPattern(baseDate, child);

			if (childDate == null) {
				continue;
			}

			eventNames.push([
				childDate,
				child.name
			]);
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
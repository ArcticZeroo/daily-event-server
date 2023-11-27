import {
	NATIVE_DAYS_OF_WEEK, NativeMonth, NATIVE_MONTHS, NativeDayOfWeek
} from '../util/date.js';
import { throwError } from '../util/error.js';

export enum RepeatPatternType {
	absolute = 'absolute',
	relative = 'relative',
	floating = 'floating'
}

export enum RepeatMonth {
	all = 'all',
	january = 'january',
	february = 'february',
	march = 'march',
	april = 'april',
	may = 'may',
	june = 'june',
	july = 'july',
	august = 'august',
	september = 'september',
	october = 'october',
	november = 'november',
	december = 'december'
}

export const ALL_REPEAT_MONTHS = [
	RepeatMonth.january,
	RepeatMonth.february,
	RepeatMonth.march,
	RepeatMonth.april,
	RepeatMonth.may,
	RepeatMonth.june,
	RepeatMonth.july,
	RepeatMonth.august,
	RepeatMonth.september,
	RepeatMonth.october,
	RepeatMonth.november,
	RepeatMonth.december
];

export const repeatMonthFromNativeMonth = (nativeMonth: NativeMonth): RepeatMonth => (
	{
		[NATIVE_MONTHS.january]:   RepeatMonth.january,
		[NATIVE_MONTHS.february]:  RepeatMonth.february,
		[NATIVE_MONTHS.march]:     RepeatMonth.march,
		[NATIVE_MONTHS.april]:     RepeatMonth.april,
		[NATIVE_MONTHS.may]:       RepeatMonth.may,
		[NATIVE_MONTHS.june]:      RepeatMonth.june,
		[NATIVE_MONTHS.july]:      RepeatMonth.july,
		[NATIVE_MONTHS.august]:    RepeatMonth.august,
		[NATIVE_MONTHS.september]: RepeatMonth.september,
		[NATIVE_MONTHS.october]:   RepeatMonth.october,
		[NATIVE_MONTHS.november]:  RepeatMonth.november,
		[NATIVE_MONTHS.december]:  RepeatMonth.december
	}[nativeMonth]);

export const nativeMonthFromRepeatMonth = (repeatMonth: RepeatMonth): NativeMonth => (
	{
		[RepeatMonth.january]:   NATIVE_MONTHS.january,
		[RepeatMonth.february]:  NATIVE_MONTHS.february,
		[RepeatMonth.march]:     NATIVE_MONTHS.march,
		[RepeatMonth.april]:     NATIVE_MONTHS.april,
		[RepeatMonth.may]:       NATIVE_MONTHS.may,
		[RepeatMonth.june]:      NATIVE_MONTHS.june,
		[RepeatMonth.july]:      NATIVE_MONTHS.july,
		[RepeatMonth.august]:    NATIVE_MONTHS.august,
		[RepeatMonth.september]: NATIVE_MONTHS.september,
		[RepeatMonth.october]:   NATIVE_MONTHS.october,
		[RepeatMonth.november]:  NATIVE_MONTHS.november,
		[RepeatMonth.december]:  NATIVE_MONTHS.december,
		[RepeatMonth.all]:       null
	}[repeatMonth] ?? throwError(`Invalid repeat month: ${repeatMonth}`));

export enum RelativeOrder {
	first = 'first',
	second = 'second',
	third = 'third',
	fourth = 'fourth',
	fifth = 'fifth',
	last = 'last'
}

export const relativeOrderFromOccurrence = (occurrence: number): RelativeOrder => ({
	                                                                                   1: RelativeOrder.first,
	                                                                                   2: RelativeOrder.second,
	                                                                                   3: RelativeOrder.third,
	                                                                                   4: RelativeOrder.fourth,
	                                                                                   5: RelativeOrder.fifth,
}[occurrence] ?? throwError(`Invalid occurrence: ${occurrence}`));

interface IAbsolutePattern {
	type: RepeatPatternType.absolute,
	day: number; // 1-31
	month: RepeatMonth;
}

interface IRelativePattern {
	type: RepeatPatternType.relative,
	dayOfWeek: NativeDayOfWeek;
	order: RelativeOrder;
	month: RepeatMonth;
}

interface IFloatingPattern {
	type: RepeatPatternType.floating;
	calculateDates?: (year: number, resolveDatesForPattern: (pattern: RepeatPattern) => Date[]) => Date[];
}

export type RepeatPattern = IAbsolutePattern | IRelativePattern | IFloatingPattern;

interface IAbsoluteOffsetPattern {
	type: RepeatPatternType.absolute;
	days: number;
}

export enum RelativeOffsetDirection {
	next,
	previous
}

interface IRelativeOffsetPattern {
	type: RepeatPatternType.relative;
	direction: RelativeOffsetDirection;
	dayOfWeek: NativeDayOfWeek;
}

export type OffsetPattern = IAbsoluteOffsetPattern | IRelativeOffsetPattern;

export interface IOffsetData {
	name: string;
	// When pattern is not set, the child occurs on the same day
	pattern?: OffsetPattern;
}

export interface IRepeatData {
	name?: string;
	pattern: RepeatPattern;
	children?: Array<IOffsetData>;
}

export type RelativeOrderDatesByWeekday = Map<NativeDayOfWeek, Map<RelativeOrder, number>>;

export type EventNamesByOccurrenceString = Map<string, Array<string>>;
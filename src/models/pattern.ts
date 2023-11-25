import { NativeDayOfWeek, NATIVE_DAYS_OF_WEEK, NativeMonth, NATIVE_MONTHS } from '../util/date.js';
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

export enum RepeatDayOfWeek {
	sunday = 'sunday',
	monday = 'monday',
	tuesday = 'tuesday',
	wednesday = 'wednesday',
	thursday = 'thursday',
	friday = 'friday',
	saturday = 'saturday'
}

export const repeatDayOfWeekFromNativeDayOfWeek = (nativeDayOfWeek: NativeDayOfWeek): RepeatDayOfWeek => ({
	[NATIVE_DAYS_OF_WEEK.sunday]:    RepeatDayOfWeek.sunday,
	[NATIVE_DAYS_OF_WEEK.monday]:    RepeatDayOfWeek.monday,
	[NATIVE_DAYS_OF_WEEK.tuesday]:   RepeatDayOfWeek.tuesday,
	[NATIVE_DAYS_OF_WEEK.wednesday]: RepeatDayOfWeek.wednesday,
	[NATIVE_DAYS_OF_WEEK.thursday]:  RepeatDayOfWeek.thursday,
	[NATIVE_DAYS_OF_WEEK.friday]:    RepeatDayOfWeek.friday,
	[NATIVE_DAYS_OF_WEEK.saturday]:  RepeatDayOfWeek.saturday
}[nativeDayOfWeek]);

export const nativeDayOfWeekFromRepeatDayOfWeek = (repeatDayOfWeek: RepeatDayOfWeek): NativeDayOfWeek => ({
	[RepeatDayOfWeek.sunday]:    NATIVE_DAYS_OF_WEEK.sunday,
	[RepeatDayOfWeek.monday]:    NATIVE_DAYS_OF_WEEK.monday,
	[RepeatDayOfWeek.tuesday]:   NATIVE_DAYS_OF_WEEK.tuesday,
	[RepeatDayOfWeek.wednesday]: NATIVE_DAYS_OF_WEEK.wednesday,
	[RepeatDayOfWeek.thursday]:  NATIVE_DAYS_OF_WEEK.thursday,
	[RepeatDayOfWeek.friday]:    NATIVE_DAYS_OF_WEEK.friday,
	[RepeatDayOfWeek.saturday]:  NATIVE_DAYS_OF_WEEK.saturday
}[repeatDayOfWeek]);

export interface IAbsolutePattern {
	type: RepeatPatternType.absolute,
	day: number; // 1-31
	month: RepeatMonth;
}

export interface IRelativePattern {
	type: RepeatPatternType.relative,
	dayOfWeek: RepeatDayOfWeek;
	order: RelativeOrder;
	month: RepeatMonth;
}

export interface IFloatingPattern {
	type: RepeatPatternType.floating;
}

export type RepeatPattern = IAbsolutePattern | IRelativePattern | IFloatingPattern;

export interface IAbsoluteOffsetPattern {
	type: RepeatPatternType.absolute;
	days: number;
}

export enum RelativeOffsetDirection {
	next,
	previous
}

export interface IRelativeOffsetPattern {
	type: RepeatPatternType.relative;
	direction: RelativeOffsetDirection;
	dayOfWeek: RepeatDayOfWeek;
}

export type OffsetPattern = IAbsoluteOffsetPattern | IRelativeOffsetPattern;

export interface IOffsetData {
	name: string;
	pattern: OffsetPattern;
}

export interface IRepeatData {
	name: string;
	pattern: RepeatPattern;
	children?: Array<IOffsetData>;
}

export type RelativeOrderDatesByWeekday = Map<RepeatDayOfWeek, Map<RelativeOrder, number>>;

export type EventNamesByOccurrenceString = Map<string, Array<string>>;
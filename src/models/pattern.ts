import {
	NativeDayOfWeek, NativeMonth
} from '../util/date.js';

export enum RepeatPatternType {
	absolute = 'absolute',
	relative = 'relative',
	floating = 'floating'
}

export type RelativeOrder = 1 | 2 | 3 | 4 | 5 | 'last';

export type RepeatMonth = NativeMonth | 'all';

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
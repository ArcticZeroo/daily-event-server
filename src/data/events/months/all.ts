import {
	IRepeatData,
	RelativeOrder,
	RepeatDayOfWeek,
	RepeatMonth,
	RepeatPatternType
} from '../../../models/pattern.js';

export const everyMonthEvents: IRepeatData[] = [
	{
		name:    `National Play Outside Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.all,
			dayOfWeek: RepeatDayOfWeek.saturday,
			order:     RelativeOrder.first
		}
	},
];
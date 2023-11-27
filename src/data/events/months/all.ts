import {
	IRepeatData,
	RelativeOrder,
	RepeatMonth,
	RepeatPatternType
} from '../../../models/pattern.js';
import { NATIVE_DAYS_OF_WEEK } from '../../../util/date.js';

export const everyMonthEvents: IRepeatData[] = [
	{
		name:    `National Play Outside Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.all,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.saturday,
			order:     RelativeOrder.first
		}
	},
];
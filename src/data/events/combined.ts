import { everyMonthEvents } from './months/all.js';
import { aprilEvents } from './months/april.js';
import { augustEvents } from './months/august.js';
import { decemberEvents } from './months/december.js';
import { februaryEvents } from './months/february.js';
import { januaryEvents } from './months/january.js';
import { julyEvents } from './months/july.js';
import { juneEvents } from './months/june.js';
import { marchEvents } from './months/march.js';
import { mayEvents } from './months/may.js';
import { novemberEvents } from './months/november.js';
import { octoberEvents } from './months/october.js';
import { septemberEvents } from './months/september.js';
import { IRepeatData } from '../../models/pattern.js';

export const combinedEvents: IRepeatData[] = [
	...everyMonthEvents,
	...januaryEvents,
	...februaryEvents,
	...marchEvents,
	...aprilEvents,
	// ...mayEvents,
	// ...juneEvents,
	// ...julyEvents,
	// ...augustEvents,
	// ...septemberEvents,
	// ...octoberEvents,
	...novemberEvents,
	...decemberEvents
];
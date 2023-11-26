import { IRepeatData } from '../../models/pattern.js';
import { everyMonthEvents } from './months/all.js';
import { januaryEvents } from './months/january.js';
import { februaryEvents } from './months/february.js';
import { marchEvents } from './months/march.js';
import { aprilEvents } from './months/april.js';
import { mayEvents } from './months/may.js';
import { juneEvents } from './months/june.js';
import { julyEvents } from './months/july.js';
import { augustEvents } from './months/august.js';
import { septemberEvents } from './months/september.js';
import { octoberEvents } from './months/october.js';
import { novemberEvents } from './months/november.js';
import { decemberEvents } from './months/december.js';

export const combinedEvents: IRepeatData[] = [
	...everyMonthEvents,
	...januaryEvents,
	...februaryEvents,
	...marchEvents,
	// ...aprilEvents,
	// ...mayEvents,
	// ...juneEvents,
	// ...julyEvents,
	// ...augustEvents,
	// ...septemberEvents,
	// ...octoberEvents,
	...novemberEvents,
	...decemberEvents
];
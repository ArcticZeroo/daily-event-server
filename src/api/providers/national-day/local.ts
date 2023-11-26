import { populateCalendarForYear } from '../../../data/events/populate.js';
import {
	EventType, IEvent 
} from '../../../models/event.js';
import { EventNamesByOccurrenceString } from '../../../models/pattern.js';
import { toOccursOnString } from '../../../util/date.js';

const eventsByYearCache: Map<number, EventNamesByOccurrenceString> = new Map();

const getEventsForYear = (year: number): EventNamesByOccurrenceString => {
	if (!eventsByYearCache.has(year)) {
		eventsByYearCache.set(year, populateCalendarForYear(year));
	}

	return eventsByYearCache.get(year)!;
};

const getEventsForDate = (date: Date): Array<string> => {
	const eventsByOccurrenceString = getEventsForYear(date.getFullYear());
	const occursOnString = toOccursOnString(date);

	return eventsByOccurrenceString.get(occursOnString) ?? [];
};

export const localDaysOfTheYearProvider = async (date: Date): Promise<Array<IEvent>> => {
	const eventNames = getEventsForDate(date);

	return eventNames.map(eventName => ({
		name: eventName,
		occursOn: toOccursOnString(date),
		type: EventType.Daily
	}));
};

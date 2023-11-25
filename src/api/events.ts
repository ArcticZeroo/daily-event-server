import { IConfigSettings, ICustomEventDaySetting } from '../models/config.js';
import { EventType, IConfigExecutionResult, IEvent } from '../models/event.js';
import { isObservedOnDate, toOccursOnString } from '../util/date.js';
import { possessive } from '../util/string.js';
import { retrieveNationalDayEvents } from './providers/national-day/provider.js';

const getObservedEvents = (events: ICustomEventDaySetting[], date: Date) => events.filter(event => isObservedOnDate(event, date));

const addEventsToResponse = (response: IConfigExecutionResult, i: number, events: IEvent[]) => {
    if (i === 0) {
        response.today.push(...events);
    } else {
        response.upcoming.push(...events);
    }
}

export const executeConfigForToday = async (config: IConfigSettings): Promise<IConfigExecutionResult> => {
    const today = new Date();

    const response: IConfigExecutionResult = {
        today:    [],
        upcoming: []
    };

    if (config.enableNationalDayCalendar) {
        const events = await retrieveNationalDayEvents(today);
        response.today.push(...events);
    }

    for (let i = 0; i < config.upcomingDaysCount; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);

        addEventsToResponse(response, i, getObservedEvents(config.birthdays, date).map(event => ({
            name:     `${possessive(event.name)} Birthday`,
            occursOn: toOccursOnString(date),
            type:     EventType.Birthday
        })));

        addEventsToResponse(response, i, getObservedEvents(config.importantDays, date).map(event => ({
            name:     event.name,
            occursOn: toOccursOnString(date),
            type:     EventType.Personal
        })));

        // todo: ical
    }

    return response;
}
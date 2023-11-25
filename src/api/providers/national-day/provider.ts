import { IEvent } from '../../../models/event.js';
import { localDaysOfTheYearProvider } from './local.js';

export const retrieveNationalDayEvents = async (date: Date): Promise<Array<IEvent>> => localDaysOfTheYearProvider(date);

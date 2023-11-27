import { localDaysOfTheYearProvider } from './local.js';
import { IEvent } from '../../../models/event.js';

export const retrieveNationalDayEvents = async (date: Date): Promise<Array<IEvent>> => localDaysOfTheYearProvider(date);

import { ICustomEventDaySetting } from '../models/config.js';

export const NATIVE_DAYS_OF_WEEK = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
} as const;

export type NativeDayOfWeek = typeof NATIVE_DAYS_OF_WEEK[keyof typeof NATIVE_DAYS_OF_WEEK]

export const NATIVE_MONTHS = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11
} as const;

export type NativeMonth = typeof NATIVE_MONTHS[keyof typeof NATIVE_MONTHS];

export const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export const isLeapYear = (date: Date) => {
    const year = date.getFullYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

export const isObservedOnDate = (customEvent: ICustomEventDaySetting, date: Date) => {
    const nowMonth = date.getMonth() + 1;
    const nowDay = date.getDate();

    if (nowMonth === customEvent.month && nowDay === customEvent.day) {
        return true;
    }

    // Celebrate the leap day on the day before
    return customEvent.month === 2 && customEvent.day === 29
        && nowMonth === 2 && nowDay === 28
        && isLeapYear(date);
}

export const toOccursOnString = (date: Date): `${number}-${number}-${number}` => `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
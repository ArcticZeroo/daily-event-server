import { ICustomEventDaySetting } from '../models/config.js';

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
import {
	monthNames, toOccursOnString 
} from '../../../util/date.js';
import puppeteer from 'puppeteer';
import {
	EventType, IEvent 
} from '../../../models/event.js';
import { capitalize } from '../../../util/string.js';
import * as fs from 'node:fs';
import fetch from 'node-fetch';
import jsdom from 'jsdom';

const normalizeEventNameForNationalDayCalendar = (name: string) => name.split('\s+').map(capitalize).join(' ');

const nationalDayCalendarProvider = async (date: Date): Promise<Array<IEvent>> => {
	const month = monthNames[date.getMonth()].toLowerCase();
	const url = `https://www.nationaldaycalendar.com/${month}/${month}-${date.getDate()}`;

	const browser = await puppeteer.launch({headless: 'new'});

	const page = await browser.newPage();
	await page.goto(url);

	const content = await page.content();
	fs.writeFileSync('content.html', content, 'utf-8');

	const eventNames: string[] = await page.evaluate(() => {
		// Construct inside since it's a different process
		const nameRegex = /^(.+)\s+[-–|].+$/;

		const eventNodes = document.querySelectorAll('h2.wp-block-post-title, h2.m-card--header-text');
		const eventNames: string[] = [];
		for (const node of eventNodes) {
			let text = node.textContent?.trim();
			if (!text) {
				continue;
			}

			const match = text.match(nameRegex);
			if (match) {
				const [, eventName] = match;
				if (eventName) {
					text = eventName;
				}
			}

			eventNames.push(text);
		}
		return eventNames;
	});

	return eventNames.map(eventName => ({
		name: normalizeEventNameForNationalDayCalendar(eventName),
		occursOn: toOccursOnString(date),
		type: EventType.Daily,
	}));
};

const daysOfTheYearMonthNames = [
	'jan',
	'feb',
	'mar',
	'apr',
	'may',
	'jun',
	'jul',
	'aug',
	'sept',
	'oct',
	'nov',
	'dec'
];

export const onlineDaysOfTheYearProvider = async (date: Date): Promise<Array<IEvent>> => {
	const monthName = daysOfTheYearMonthNames[date.getMonth()];
	const url = `https://www.daysoftheyear.com/days/${monthName}/${date.getDate()}/`;

	const response = await fetch(url);
	if (!response.ok) {
		console.error('Could not get events:', response.status);
		return [];
	}

	const content = await response.text();
	const contentDocument = new jsdom.JSDOM(content).window.document;

	// todo: support monthly events
	const eventNodes = contentDocument.querySelectorAll('section:first-of-type h3.card__title.heading a');
	const eventNames: string[] = [];
	for (const eventNode of eventNodes) {
		const text = eventNode.textContent?.trim();
		if (!text) {
			continue;
		}

		eventNames.push(text);
	}

	return eventNames.map(eventName => ({
		name: eventName,
		occursOn: toOccursOnString(date),
		type: EventType.Daily,
	}));
};
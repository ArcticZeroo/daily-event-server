export enum EventType {
    Daily = 'daily',
    Personal = 'personal',
    Birthday = 'birthday'
}

export interface IEvent {
    occursOn: `${number}-${number}-${number}`;
    name: string;
    type: EventType;
}

export interface IConfigExecutionResult {
    today: IEvent[];
    upcoming: IEvent[];
}
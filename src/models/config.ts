import Ajv, { JSONSchemaType } from 'ajv';

// @ts-ignore - not sure why it's not constructable
const ajv = new Ajv({
    removeAdditional: 'all',
    useDefaults:      true,
});

export interface ICustomEventDaySetting {
    name: string;
    day: number;
    month: number;
    year?: number;
}

export interface IConfigSettings {
    enableNationalDayCalendar: boolean;
    birthdays: ICustomEventDaySetting[];
    importantDays: ICustomEventDaySetting[];
    iCalSources: string[];
    upcomingDaysCount: number;
}

const customDaySettingSchema: JSONSchemaType<ICustomEventDaySetting> = {
    type:                 'object',
    properties:           {
        name:  { type: 'string' },
        day:   { type: 'number', minimum: 1, maximum: 31 },
        month: { type: 'number', minimum: 1, maximum: 12 },
        year:  { type: 'number', nullable: true, minimum: 0, maximum: 9999 },
    },
    required:             ['name', 'day', 'month'],
    additionalProperties: false,
}

const configSchema: JSONSchemaType<IConfigSettings> = {
    type:                 'object',
    properties:           {
        enableNationalDayCalendar: { type: 'boolean', default: true },
        birthdays:                 {
            type:    'array',
            items:   customDaySettingSchema,
            default: []
        },
        importantDays:             {
            type:    'array',
            items:   customDaySettingSchema,
            default: []
        },
        iCalSources:               {
            type:    'array',
            items:   {
                type: 'string'
            },
            default: []
        },
        upcomingDaysCount:         { type: 'number', default: 14 }
    },
    required:             [],
    additionalProperties: false
};

const configValidator = ajv.compile(configSchema);

export const validateConfigSettingsAndSetDefaults = (settings: Object): settings is IConfigSettings => {
    return configValidator(settings);
};

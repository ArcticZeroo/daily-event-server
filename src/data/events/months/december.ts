import {
	IRepeatData,
	RelativeOffsetDirection,
	RelativeOrder,
	RepeatPatternType
} from '../../../models/pattern.js';
import {
	allDaysBetween, NATIVE_DAYS_OF_WEEK, NATIVE_MONTHS 
} from '../../../util/date.js';

export const decemberEvents: IRepeatData[] = [
	{
		name: `National Pie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		} 
	},
	{
		name: `Antarctica Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		} 
	},
	{
		name:    `National Bartender Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday,
			order:     RelativeOrder.first
		}
	},
	{
		name:    `National Eat A Red Apple Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		}
	},
	{
		name:    `Faux Fur Friday`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday,
			order:     RelativeOrder.first
		}
	},
	{
		name: `World Aids Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		} 
	},
	{
		name: `Rosa Parks Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		} 
	},
	{
		name: `Day Without Art`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		} 
	},
	{
		name:    `Bifocals At The Monitor Liberation Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 1 
		}
	},
	{
		name:    `National Fritters Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 2 
		}
	},
	{
		name:    `Skywarn® Recognition Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.saturday,
			order:     RelativeOrder.first
		}
	},
	{
		name: `National Mutt Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 2 
		} 
	},
	{
		name: `National Mutt Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.july,
			day: 31 
		} 
	},
	{
		name:    `National Special Education Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 2 
		}
	},
	{
		name:    `International Day For The Abolition Of Slavery`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 2 
		}
	},
	{
		name:    `National Roof Over Your Head Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 3 
		}
	},
	{
		name:    `International Day Of Persons With Disabilities`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 3 
		}
	},
	{
		name: `Santa's List Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		} 
	},
	{
		name: `Cabernet Franc Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		} 
	},
	{
		name:    `International Cheetah Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		}
	},
	{
		name:    `Wildlife Conservation Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		}
	},
	{
		name: `National Sock Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		} 
	},
	{
		name: `National Dice Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		} 
	},
	{
		name: `National Cookie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 4 
		} 
	},
	{
		name: `Krampusnacht`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		} 
	},
	{
		name: `World Soil Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		} 
	},
	{
		name: `National Repeal Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		} 
	},
	{
		name:    `World Trick Shot Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.tuesday,
			order:     RelativeOrder.first
		}
	},
	{
		name:    `National Sacher Torte Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		}
	},
	{
		name:    `International Volunteer Day For Economic And Social Development`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		}
	},
	{
		name:    `International Ninja Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		}
	},
	{
		name: `Bathtub Party Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 5 
		} 
	},
	{
		name: `Mitten Tree Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 6 
		} 
	},
	{
		name:    `National Day Of Remembrance And Action On Violence Against Women`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 6 
		}
	},
	{
		name:    `National Gazpacho Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 6 
		}
	},
	{
		name: `Saint Nicholas Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 6 
		} 
	},
	{
		name:    `National Miner's Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 6 
		}
	},
	{
		name:    `National Pawnbrokers Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 6 
		}
	},
	{
		name: `National Slime Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 7 
		} 
	},
	{
		name:    `National Illinois Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 7 
		}
	},
	{
		name:    `Hanukkah`,
		pattern: {
			type:           RepeatPatternType.floating,
			calculateDates: (year) => {
				// For now, let's just use a table rather than pull in moon/hebrew calendar info.
				const dateRanges: Array<[Date, Date]> = [
					[
						new Date(2023, NATIVE_MONTHS.december, 7),
						new Date(2023, NATIVE_MONTHS.december, 15)
					],
					[
						new Date(2024, NATIVE_MONTHS.december, 25),
						new Date(2025, NATIVE_MONTHS.january, 2)
					],
					[
						new Date(2025, NATIVE_MONTHS.december, 14),
						new Date(2025, NATIVE_MONTHS.december, 22)
					],
					[
						new Date(2026, NATIVE_MONTHS.december, 4),
						new Date(2026, NATIVE_MONTHS.december, 12)
					],
					[
						new Date(2027, NATIVE_MONTHS.december, 24),
						new Date(2028, NATIVE_MONTHS.january, 1)
					],
				];

				const dates: Date[] = [];

				for (const [startRange, endRange] of dateRanges) {
					if (startRange.getFullYear() === year || endRange.getFullYear() === year) {
						dates.push(...allDaysBetween(startRange, endRange));
					}
				}

				return dates;
			}
		}
	}, // Moon calendar
	{
		name:    `International Civil Aviation Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 7 
		}
	},
	{
		name:    `National Cotton Candy Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 7 
		}
	},
	{
		name:    `National  Pearl Harbor Remembrance Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 7 
		}
	},
	{
		name:    `National Crossword Solvers Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 8 
		}
	},
	{
		name: `Bodhi Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 8 
		} 
	},
	{
		name:    `National Salesperson Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday,
			order:     RelativeOrder.second
		}
	},
	{
		name:    `National Brownie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 8 
		}
	},
	{
		name:    `Pretend To Be A Time Traveler Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 8 
		}
	},
	{
		name: `Lutefisk Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		} 
	},
	{
		name: `World Techno Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		} 
	},
	{
		name: `Christmas Card Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		} 
	},
	{
		name:    `International Day Of Commemoration And Dignity Of The Victims Of The Crime Of Genocide`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		}
	},
	{
		name: `National Pastry Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		} 
	},
	{
		name: `Weary Willie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		} 
	},
	{
		name:    `International Anti-Corruption Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 9 
		}
	},
	{
		name: `National Lager Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 10 
		} 
	},
	{
		name: `Nobel Prize Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 10 
		} 
	},
	{
		name: `Human Rights Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 10 
		} 
	},
	{
		name:    `Dewey Decimal System Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 10 
		}
	},
	{
		name:    `National Stretching Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 11 
		}
	},
	{
		name: `Unicef Birthday`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 11 
		} 
	},
	{
		name: `National App Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 11 
		} 
	},
	{
		name:    `National Noodle Ring Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 11 
		}
	},
	{
		name:    `International Mountain Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 11 
		}
	},
	{
		name:    `International Universal Health Coverage Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 12 
		}
	},
	{
		name:    `International Day Of Neutrality`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 12 
		}
	},
	{
		name:    `National Ding-a-ling Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 12 
		}
	},
	{
		name:    `National Ambrosia Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 12 
		}
	},
	{
		name:    `National Poinsettia Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 12 
		}
	},
	{
		name:    `Gingerbread House Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 12 
		}
	},
	{
		name:    `National Guard Birthday`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 13 
		}
	},
	{
		name:    `National Violin Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 13 
		}
	},
	{
		name: `National Cocoa Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 13 
		} 
	},
	{
		name:    `National Day Of The Horse`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 13 
		}
	},
	{
		name:    `Pick A Pathologist Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 13 
		}
	},
	// { name: `Asarah B'tevet`, pattern: { type: RepeatPatternType.floating, month: NATIVE_MONTHS.december } },
	{
		name:    `Martyred Intellectuals Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 14 
		}
	},
	{
		name:    `National Alabama Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 14 
		}
	},
	{
		name:    `National Bouillabaisse Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 14 
		}
	},
	{
		name: `Monkey Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 14 
		} 
	},
	{
		name:    `International Tea Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 15 
		}
	},
	{
		name:    `National Wear Your Pearls Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 15 
		}
	},
	{
		name:    `National Ugly Christmas Sweater Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday,
			order:     RelativeOrder.third
		}
	},
	{
		name:    `National Cupcake Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 15 
		}
	},
	{
		name:    `National Underdog Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.december,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday,
			order:     RelativeOrder.third
		}
	},
	{
		name: `Cat Herders Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 15 
		} 
	},
	{
		name: `Bill Of Rights Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 15 
		} 
	},
	/*{
		name:    `National Wreaths Across America Day`,
		pattern: { type: RepeatPatternType.floating, month: NATIVE_MONTHS.december }
	},*/
	{
		name:    `National Chocolate-Covered Anything Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 16 
		}
	},
	{
		name:    `Barbie And Barney Backlash Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 16 
		}
	},
	{
		name:    `National Maple Syrup Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 17 
		}
	},
	{
		name:    `Wright Brothers Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 17 
		}
	},
	{
		name:    `World Arabic Language Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 18 
		}
	},
	{
		name: `National Twin Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 18 
		} 
	},
	{
		name:    `National Roast Suckling Pig Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 18 
		}
	},
	{
		name:    `International Migrants Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 18 
		}
	},
	{
		name:    `Answer The Telephone Like Buddy The Elf Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 18 
		}
	},
	{
		name:    `National Oatmeal Muffin Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 19 
		}
	},
	{
		name:    `National Hard Candy Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 19 
		}
	},
	{
		name: `Go Caroling Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 20 
		} 
	},
	{
		name:    `National Sangria Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 20 
		}
	},
	{
		name: `Mudd Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 20 
		} 
	},
	{
		name:    `International Human Solidarity Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 20 
		}
	},
	{
		name: `National Maine Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 21 
		} 
	},
	{
		name:    `National French Fried Shrimp Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 21 
		}
	},
	{
		name:     `Winter Solstice`,
		pattern:  {
			type:           RepeatPatternType.floating,
			calculateDates: (year) => {
				const daysByYear: Record<number, number> = {
					2023: 22,
					2024: 21,
					2025: 21,
					2026: 21,
					2027: 22,
					2028: 21
				};
				const day = daysByYear[year];
				return [new Date(year, NATIVE_MONTHS.december, day)];
			}
		},
		children: [

			{ name: `National Flashlight Day` }, // Winter solstice
			{ name: `Anne & Samantha Day` }, // Winter solstice
			{ name: `Yule` }, // Winter solstice
			{
				name:    `National Homeless Persons' Remembrance Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1 
				}
			},
			{
				name:    'First Day of Winter',
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1 
				}
			}
		]
	},
	{
		name:    `Phileas Fogg Win A Wager Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 21 
		}
	},
	{
		name: `Humbug Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 21 
		} 
	},
	{
		name:    `Crossword Puzzle Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 21 
		}
	},
	{
		name:    `National Date Nut Bread Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 22 
		}
	},
	{
		name:    `Forefathers' Day`,
		pattern: {
			type: RepeatPatternType.floating,
			calculateDates: (year, resolveDatesForPattern) => {
				const baseDate = new Date(year, NATIVE_MONTHS.december, 22);

				// If on sunday, occurs on "following monday"
				if (baseDate.getDay() === NATIVE_DAYS_OF_WEEK.sunday) {
					return [new Date(year, NATIVE_MONTHS.december, 23)];
				}

				return [baseDate];
			}
		}
	},
	{
		name: `National Roots Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 23 
		} 
	},
	{
		name:    `National Pfeffernusse Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 23 
		}
	},
	{
		name: `Festivus`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 23 
		} 
	},
	{
		name:    `National Eggnog Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 24 
		}
	},
	{
		name: `Christmas Eve`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 24 
		} 
	},
	{
		name:    `National Pumpkin Pie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 25 
		}
	},
	{
		name:     `Christmas Day`,
		pattern:  {
			type:  RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day:   25
		},
		children: [
			{
				name:    `National Re-Gifting Day`,
				pattern: {
					type:      RepeatPatternType.relative,
					direction: RelativeOffsetDirection.previous,
					dayOfWeek: NATIVE_DAYS_OF_WEEK.thursday
				}
			},
		]
	},
	{
		name:    `"A'phabet Day Or No ""l"" Day"`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 25 
		}
	},
	{
		name:    `National Whiners Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 26 
		}
	},
	{
		name:    `National Thank You Note Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 26 
		}
	},
	{
		name:    `National Candy Cane Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 26 
		}
	},
	{
		name: `Boxing Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 26 
		} 
	},
	{
		name:    `National Fruitcake Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 27 
		}
	},
	{
		name:    `National Short Film Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 28 
		}
	},
	{
		name:    `National Card Playing Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 28 
		}
	},
	{
		name:    `National Chocolate Candy Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 28 
		}
	},
	{
		name:    `Pledge Of Allegiance Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 28 
		}
	},
	{
		name: `Holy Innocents Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 28 
		} 
	},
	{
		name:    `National Pepper Pot Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 29 
		}
	},
	{
		name: `No Interruptions Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 31 
		}
	}, // Technically "the last work day of the year", but that feels nebulous.
	{
		name: `Tick Tock Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 29 
		} 
	},
	{
		name:    `National Bicarbonate Of Soda Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 30 
		}
	},
	{
		name:    `Falling Needles Family Fest Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 30 
		}
	},
	{
		name: `Bacon Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 30 
		} 
	},
	{
		name:    `National Champagne Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 31 
		}
	},
	{
		name:    `Universal Hour Of Peace`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 31 
		}
	},
	{
		name: `New Year's Eve`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 31 
		} 
	},
	{
		name:    `Make Up Your Mind Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 31 
		}
	},
	{
		name:    `Leap Second Time Adjustment Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.december,
			day: 31 
		}
	},
];

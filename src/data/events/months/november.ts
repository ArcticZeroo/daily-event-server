import {
	IRepeatData,
	RelativeOffsetDirection,
	RelativeOrder,
	RepeatDayOfWeek,
	RepeatMonth,
	RepeatPatternType
} from '../../../models/pattern.js';

export const novemberEvents: IRepeatData[] = [
	{ name: `Prime Meridian Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 } },
	{ name: `Day Of The Dead`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 } },
	{ name: `All Saints Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 } },
	{
		name:    `Autistics Speaking Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Biologic Coordinators Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{ name: `World Vegan Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 } },
	{
		name:    `National Cinnamon Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Calzone Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Stress Awareness Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.wednesday,
			order:     RelativeOrder.first
		}
	},
	{ name: `National Brush Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 } },
	{
		name:    `National Deep Fried Clams Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Cook For Your Pets Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Family Literacy Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Author's Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `National Vinegar Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 1 }
	},
	{
		name:    `International Doge Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 2 }
	},
	{ name: `All Souls Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 2 } },
	{
		name:    `National Cash Back Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.first
		}
	},
	{ name: `National Ohio Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 2 } },
	{
		name:    `National Men Make Dinner Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.first
		}
	},
	{
		name:    `National Broadcast Traffic Professional's Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 2 }
	},
	{
		name:    `National Deviled Egg Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 2 }
	},
	{
		name:    `National Fountain Pen Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.friday,
			order:     RelativeOrder.first
		}
	},
	{ name: `One Health Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 3 } },
	{ name: `World Jellyfish Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 3 } },
	{
		name:    `National Jersey Friday`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.friday,
			order:     RelativeOrder.first
		}
	},
	{
		name:    `National Housewife’s Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 3 }
	},
	{
		name:    `National Sandwich Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 3 }
	},
	{
		name:    `National Bison Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.saturday,
			order:     RelativeOrder.first
		}
	},
	{ name: `National Candy Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 4 } },
	{
		name:    `National Chicken Lady Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 4 }
	},
	{
		name:    `World Tsunami Awareness Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 5 }
	},
	{
		name:    `National Love Your Red Hair Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.sunday,
			order:     RelativeOrder.first
		}
	},
	{ name: `National Donut Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 5 } },
	{
		name:    `Daylight Saving Time Ends`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.sunday,
			order:     RelativeOrder.first
		}
	},
	{
		name:    `Job Action Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.monday,
			order:     RelativeOrder.first
		}
	},
	{
		name:    `International Day For Preventing The Exploitation Of The Environment In War And Armed Conflict`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 6 }
	},
	{
		name:    `Color The World Orange Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.monday,
			order:     RelativeOrder.first
		}
	},
	{ name: `National Nachos Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 6 } },
	{
		name:    `National Saxophone Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 6 }
	},
	{
		name:    `International Merlot Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 7 }
	},
	{
		name:    `National Retinol Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 7 }
	},
	{
		name:    `International Day Of Medical Physics`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 7 }
	},
	{
		name:    `National Canine Lymphoma Awareness Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 7 }
	},
	{
		name:    `National Bittersweet Chocolate With Almonds Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 7 }
	},
	{
		name:    `World Radiography Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 8 }
	},
	{ name: `World Urbanism Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 8 } },
	{
		name:    `National S.t.e.m./s.t.e.a.m. Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 8 }
	},
	{
		name:    `National Parents As Teachers Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 8 }
	},
	{
		name:    `National Harvey Wallbanger Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 8 }
	},
	{
		name:    `National Cappuccino Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 8 }
	},
	{ name: `World Adoption Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 9 } },
	{ name: `World Freedom Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 9 } },
	{
		name:    `National Louisiana Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 9 }
	},
	{
		name:    `Microtia Awareness Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 9 }
	},
	{
		name:    `National Scrapple Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 9 }
	},
	{
		name:    `National Civic Pride Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 10 }
	},
	{
		name:    `World Net Cancer Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 10 }
	},
	{
		name:    `National Vanilla Cupcake Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 10 }
	},
	{
		name:    `National Forget-Me-Not Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 10 }
	},
	{
		name:    `United States Marine Corps Birthday`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 10 }
	},
	{
		name:    `National Sundae Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 11 }
	},
	{ name: `Veterans Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 11 } },
	{
		name:    `World Pneumonia Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 12 }
	},
	{
		name:    `National French Dip Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 12 }
	},
	{
		name:    `National Chicken Soup For The Soul Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 12 }
	},
	{
		name:    `National Pizza With The Works Except Anchovies Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 12 }
	},
	{ name: `World Kindness Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 13 } },
	{
		name:    `National Indian Pudding Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 13 }
	},
	{
		name:    `National Seat Belt Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 14 }
	},
	{
		name:    `National Family Pj Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 14 }
	},
	{ name: `World Diabetes Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 14 } },
	{
		name:    `National Spicy Guacamole Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 14 }
	},
	{
		name:    `National Pickle Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 14 }
	},
	// {
	// 	name:    `National Education Support Professionals Day`,
	// 	pattern: { type: RepeatPatternType.floating, month: RepeatMonth.november }
	// },
	{
		name:    `National Raisin Bran Cereal Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 15 }
	},
	{
		name:    `National Spicy Hermit Cookie Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 15 }
	},
	{ name: `National Bundt Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 15 } },
	{
		name:    `National Clean Out Your Refrigerator Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 15 }
	},
	{
		name:    `National Philanthropy Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 15 }
	},
	{
		name:    `America Recycles Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 15 }
	},
	{
		name:    `World Pancreatic Cancer Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.third
		}
	},
	{
		name:    `International Check Your Wipers Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 16 }
	},
	{
		name:    `International Day For Tolerance`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 16 }
	},
	{
		name:    `National Rural Health Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.third
		}
	},
	{
		name:    `National Indiana Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 16 }
	},
	{
		name:    `Madd Tie One On For Safety Holiday Campaign`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 16 }
	},
	{
		name:    `Great American Smokeout`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.third
		}
	},
	{
		name:    `National Button Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 16 }
	},
	{
		name:    `National Fast Food Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 16 }
	},
	{
		name:    `International Students' Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `National Butter Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `World Prematurity Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `International Happy Gose Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `National Homemade Bread Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `National Take A Hike Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `National Baklava Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 17 }
	},
	{
		name:    `European Antibiotic Awareness Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 18 }
	},
	{
		name:    `National Princess Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 18 }
	},
	{
		name:    `Mickey Mouse Birthday`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 18 }
	},
	{
		name:    `National Vichyssoise Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 18 }
	},
	{ name: `World Toilet Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 19 } },
	{
		name:    `National Play Monopoly Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 19 }
	},
	{
		name:    `National Carbonated Beverage With Caffeine Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 19 }
	},
	{
		name:    `World Children's Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 20 }
	},
	{
		name:    `National Absurdity Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 20 }
	},
	{
		name:    `National Peanut Butter Fudge Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 20 }
	},
	{
		name:    `National Child's Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 20 }
	},
	{
		name:    `World Television Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 21 }
	},
	{ name: `World Hello Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 21 } },
	{
		name:    `National Gingerbread Cookie Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 21 }
	},
	{
		name:    `National Red Mitten Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 21 }
	},
	{
		name:    `National Stuffing Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 21 }
	},
	{
		name:    `National Cranberry Relish Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 22 }
	},
	{ name: `Wolfenoot`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 23 } },
	{ name: `Fibonacci Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 23 } },
	{
		name:    `National Espresso Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 23 }
	},
	{
		name:    `Turkey Free Thanksgiving`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.fourth
		}
	},
	{
		name:    `National Day Of Mourning`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.fourth
		}
	},
	{
		name:     `Thanksgiving Day`,
		pattern:  {
			type:      RepeatPatternType.relative,
			month:     RepeatMonth.november,
			dayOfWeek: RepeatDayOfWeek.thursday,
			order:     RelativeOrder.fourth
		},
		children: [
			{
				name:    `Substitute Educators Day`,
				pattern: {
					type:      RepeatPatternType.relative,
					direction: RelativeOffsetDirection.previous,
					dayOfWeek: RepeatDayOfWeek.friday
				}
			},
			{
				name:    `National Adoption Day`,
				pattern: {
					type:      RepeatPatternType.relative,
					direction: RelativeOffsetDirection.previous,
					dayOfWeek: RepeatDayOfWeek.saturday
				}
			},
			{
				name:    `National Tie One On Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: -1
				}
			},
			{
				name:    `National Jukebox Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: -1
				}
			},
			{
				name:    `You're Welcomegiving Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `Maize Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `Buy Nothing Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `Black Friday`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `National Native American Heritage Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `National Day Of Listening`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `National Flossing Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
			{
				name:    `Small Business Saturday`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 2
				}
			},
			{
				name:    `National Secondhand Sunday`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 3
				}
			},
			{
				name:    `Cyber Monday`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 4
				}
			},
			{
				name:    `National Day Of Giving`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 5
				}
			},
			{
				name:    `National Package Protection Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 6
				}
			},
		]
	},
	{
		name:    `National Eat A Cranberry Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 23 }
	},
	{
		name:    `National Cashew Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 23 }
	},
	{
		name:    `National Sardines Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 24 }
	},
	{
		name:    `National Play Day With Dad`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 25 }
	},
	{
		name:    `National Parfait Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 25 }
	},
	{
		name:    `Shopping Reminder Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 25 }
	},
	{ name: `Blase' Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 25 } },
	{ name: `National Cake Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 26 } },
	{
		name:    `National Craft Jerky Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 27 }
	},
	{
		name:    `National Bavarian Cream Pie Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 27 }
	},
	{ name: `National Alan Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 28 } },
	{ name: `Red Planet Day`, pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 28 } },
	{
		name:    `National French Toast Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 28 }
	},
	{
		name:    `International Day Of Solidarity With The Palestinian People`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 29 }
	},
	{
		name:    `Electronic Greetings Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 29 }
	},
	{
		name:    `Day Of Remembrance For All Victims Of Chemical Warfare`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `National Personal Space Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `National Mississippi Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `National Mason Jar Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `National Mousse Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `Stay Home Because You're Well Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `National Meth Awareness Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
	{
		name:    `Computer Security Day`,
		pattern: { type: RepeatPatternType.absolute, month: RepeatMonth.november, day: 30 }
	},
];

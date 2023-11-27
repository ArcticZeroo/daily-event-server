import {
	IRepeatData,
	RepeatPatternType
} from '../../../models/pattern.js';
import {
	NATIVE_DAYS_OF_WEEK, NATIVE_MONTHS 
} from '../../../util/date.js';

export const marchEvents: IRepeatData[] = [
	{
		name:    `National Sunkist Citrus Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		}
	},
	{
		name: `Self-Injury Awareness Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		} 
	},
	{
		name: `National Minnesota Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		} 
	},
	{
		name:    `National Dadgum That's Good Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		}
	},
	{
		name:    `National Horse Protection Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		}
	},
	{
		name:    `National Fruit Compote Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		}
	},
	{
		name: `National Pig Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		} 
	},
	{
		name:    `National Peanut Butter Lover’s Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 1 
		}
	},
	{
		name:    `World Teen Mental Wellness Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 2 
		}
	},
	{
		name: `National Hospitalist Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 1,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.thursday 
		} 
	},
	{
		name:    `National Banana Cream Pie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 2 
		}
	},
	{
		name: `National Old Stuff Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 2 
		} 
	},
	{
		name:    `National Read Across America Day (dr. Seuss Day)`,
		pattern: {
			type:           RepeatPatternType.floating,
			calculateDates: (year) => {
				const baseDate = new Date(year, NATIVE_MONTHS.march, 2);
				const weekday = baseDate.getDay();

				// Nearest school day if on a weekend
				if (weekday === NATIVE_DAYS_OF_WEEK.saturday) {
					return [new Date(year, NATIVE_MONTHS.march, 1)];
				}

				if (weekday === NATIVE_DAYS_OF_WEEK.sunday) {
					return [new Date(year, NATIVE_MONTHS.march, 3)];
				}

				return [baseDate];
			}
		}
	},
	{
		name:    `National Soup It Forward Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		}
	},
	{
		name:    `National Dress In Blue Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.march,
			order:     1,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday
		}
	},
	{
		name:    `National Speech And Debate Education Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.march,
			order:     1,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday
		}
	},
	{
		name: `World Wildlife Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		} 
	},
	{
		name:    `National Employee Appreciation Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 1,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.friday 
		}
	},
	{
		name:    `Global Day Of Unplugging`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		}
	},
	{
		name:    `National Mulled Wine Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		}
	},
	{
		name: `National Cold Cuts Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		} 
	},
	{
		name:    `National I Want You To Be Happy Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		}
	},
	{
		name: `National Anthem Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		} 
	},
	{
		name: `National Sons Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 4 
		} 
	},
	{
		name: `Marching Music Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 4 
		} 
	},
	{
		name:    `Global Day Of Unplugging`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 3 
		}
	},
	{
		name: `National Grammar Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 4 
		} 
	},
	{
		name:    `National Hug A  G.i.  Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 4 
		}
	},
	{
		name:    `National Pound Cake Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 4 
		}
	},
	{
		name: `Finisher's Medal Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 1,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.sunday 
		} 
	},
	{
		name: `National Absinthe Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 5 
		} 
	},
	{
		name:    `National Cheese Doodle Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 5 
		}
	},
	{
		name:    `National Multiple Personality Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 5 
		}
	},
	{
		name: `National Dress Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 6 
		} 
	},
	{
		name:    `National Oreo Cookie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 6 
		}
	},
	{
		name:    `National White Chocolate Cheesecake Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 6 
		}
	},
	{
		name:    `National Frozen Food Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 6 
		}
	},
	{
		name: `National Dentist’s Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 6 
		} 
	},
	{
		name: `National Flapjack Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 7 
		} 
	},
	{
		name:    `National Crown Roast Of Pork Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 7 
		}
	},
	{
		name: `National Cereal Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 7 
		} 
	},
	{
		name: `National Be Heard Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 7 
		} 
	},
	{
		name: `National Oregon Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 8 
		} 
	},
	{
		name:    `International Women's Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 8 
		}
	},
	{
		name:    `National Registered Dietitian Nutritionist Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 2,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.wednesday 
		}
	},
	{
		name:    `National Proofreading Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 8 
		}
	},
	{
		name:    `National Peanut Cluster Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 8 
		}
	},
	{
		name:    `National Slam The Scam Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 9 
		}
	},
	{
		name: `World Kidney Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 2,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.thursday 
		} 
	},
	{
		name:    `National Get Over It Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 9 
		}
	},
	{
		name: `National Meatball Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 9 
		} 
	},
	{
		name: `National Crab Meat Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 9 
		} 
	},
	{
		name: `National Barbie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 9 
		} 
	},
	{
		name:    `International Bagpipe Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 10 
		}
	},
	{
		name:    `National Women And Girls HIV/AIDS Awareness Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 10 
		}
	},
	{
		name:    `National  Pack Your Lunch Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 10 
		}
	},
	{
		name:    `National Blueberry Popover Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 10 
		}
	},
	{
		name: `National Mario Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 10 
		} 
	},
	{
		name: `National 311 Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 11 
		} 
	},
	{
		name:    `National Funeral Director And Mortician Recognition Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 11 
		}
	},
	{
		name:    `National Promposal Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 11 
		}
	},
	{
		name:    `National Oatmeal Nut Waffles Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 11 
		}
	},
	{
		name:    `National Worship Of Tools Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 11 
		}
	},
	{
		name:    `National Johnny Appleseed Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 11 
		}
	},
	{
		name: `National I Am Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 2,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.sunday 
		} 
	},
	{
		name:    `National Working Moms Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 12 
		}
	},
	{
		name:     `Daylight Saving Time`,
		pattern:  {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.march,
			order:     2,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.sunday
		},
		children: [
			{
				name:    `National Napping Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: 1
				}
			},
		]
	},
	{
		name:    `National Baked Scallops Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 12 
		}
	},
	{
		name:    `National Plant A Flower Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 12 
		}
	},
	{
		name:    `National Girl Scout Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 12 
		}
	},
	{
		name: `National Jewel Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 13 
		} 
	},
	{
		name:    `National K9 Veterans Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 13 
		}
	},
	{
		name:    `National Coconut Torte Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 13 
		}
	},
	{
		name:    `National Good Samaritan Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 13 
		}
	},
	{
		name:    `National Open An Umbrella Indoors Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 13 
		}
	},
	{
		name: `National Earmuff Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 13 
		} 
	},
	{
		name:    `National Write Down Your Story Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 14 
		}
	},
	// { name: `National Equal Pay Day`, pattern: { type: RepeatPatternType.relative, month: NATIVE_MONTHS.march } },
	{
		name:    `National Children’s Craft Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 14 
		}
	},
	{
		name:    `National Learn About Butterflies Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 14 
		}
	},
	{
		name: `National Pi Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 14 
		} 
	},
	{
		name:    `National Potato Chip Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 14 
		}
	},
	{
		name: `National SBDC Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 3,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.wednesday 
		} 
	},
	{
		name: `National Kansas Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 15 
		} 
	},
	{
		name:    `Everything You Think Is Wrong Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 15 
		}
	},
	{
		name:    `National Pears Helene Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 15 
		}
	},
	{
		name:    `National Shoe The World Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 15 
		}
	},
	{
		name: `National Spray Tanning Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 3,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.thursday 
		} 
	},
	{
		name: `Absolutely Incredible Kids Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 3,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.thursday 
		} 
	},
	{
		name:    `National Curl Crush Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 16 
		}
	},
	{
		name: `National Panda Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 16 
		} 
	},
	{
		name: `National Farm Rescuer Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 3,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.thursday 
		} 
	},
	{
		name:    `National Artichoke Hearts Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 16 
		}
	},
	{
		name:    `National Everything You Do Is Right Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 16 
		}
	},
	{
		name:    `National Freedom Of Information Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 16 
		}
	},
	// { name: `World Sleep Day`, pattern: { type: RepeatPatternType.relative, month: NATIVE_MONTHS.march } }, // Friday before spring equinox
	{
		name: `St. Patrick's Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 17 
		} 
	},
	{
		name:    `National Corned Beef And Cabbage Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 17 
		}
	},
	// { name: `National Corn Dog Day`, pattern: { type: RepeatPatternType.floating, month: NATIVE_MONTHS.march } },
	{
		name:    `National Biodiesel Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 18 
		}
	},
	{
		name:    `National Sloppy Joe Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 18 
		}
	},
	{
		name:    `National Lacy Oatmeal Cookie Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 18 
		}
	},
	{
		name:    `National Awkward Moments Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 18 
		}
	},
	{
		name:    `National Supreme Sacrifice Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 18 
		}
	},
	{
		name: `National Quilting Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 3,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.saturday 
		} 
	},
	{
		name: `National Backyard Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 19 
		} 
	},
	{
		name:    `National Certified Nurses Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 19 
		}
	},
	{
		name:    `National Let’s Laugh Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 19 
		}
	},
	{
		name:    `National Chocolate Caramel Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 19 
		}
	},
	{
		name: `National Poultry Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 19 
		} 
	},
	{
		name: `World Flour Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 20 
		} 
	},
	{
		name: `National Proposal Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 20 
		} 
	},
	{
		name:     `Spring Begins`,
		pattern:  {
			type:  RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			// Ok, this isn't actually always true. But at least through 2028 it is true.
			day: 20
		},
		children: [
			{
				name:    `World Sleep Day`,
				pattern: {
					type: RepeatPatternType.absolute,
					days: -1
				}
			},
		]
	},
	{
		name:    `National Native Hiv/aids Awareness Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 20 
		}
	},
	{
		name: `National Ravioli Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 20 
		} 
	},
	{
		name: `National Memory Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		} 
	},
	// 3rd day of 3rd week in March, which is actually just 3rd Tuesday.
	{
		name: `National 3-D Day`,
		pattern: {
			type: RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 3,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.tuesday 
		} 
	},
	{
		name:    `National Countdown Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	{
		name:    `World Down Syndrome Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	// { name: `National Ag Day`, pattern: { type: RepeatPatternType.relative, month: NATIVE_MONTHS.march } },
	{
		name:    `National French Bread Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	{
		name:    `National California Strawberry Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	{
		name:    `National Fragrance Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	{
		name:    `National Single Parent Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	{
		name:    `National Common Courtesy Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 21 
		}
	},
	{
		name:    `National West Virginia Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 22 
		}
	},
	{
		name: `World Water Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 22 
		} 
	},
	{
		name:    `National Bavarian Crepes Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 22 
		}
	},
	{
		name: `National Goof Off Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 22 
		} 
	},
	{
		name: `National Tamale Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 23 
		} 
	},
	{
		name: `National Chia Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 23 
		} 
	},
	{
		name:    `National Melba Toast Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 23 
		}
	},
	{
		name:    `National Near Miss Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 23 
		}
	},
	{
		name:    `National Chip And Dip Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 23 
		}
	},
	{
		name: `National Puppy Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 23 
		} 
	},
	{
		name: `National Cocktail Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 24 
		} 
	},
	{
		name:    `National Cheesesteak Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 24 
		}
	},
	{
		name:    `National Chocolate Covered Raisin Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 24 
		}
	},
	{
		name:    `National Medal Of Honor Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 25 
		}
	},
	{
		name: `Tolkien Reading Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 25 
		} 
	},
	{
		name:    `National Lobster Newburg Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 25 
		}
	},
	{
		name:    `Epilepsy Awareness Day - Purple Day`,
		pattern: {
			type:  RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day:   26
		}
	},
	{
		name: `National Nougat Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 26 
		} 
	},
	{
		name: `National Spinach Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 26 
		} 
	},
	{
		name:    `International Medical Science Liaison Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 27 
		}
	},
	{
		name: `National Scribble Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 27 
		} 
	},
	{
		name: `World Theatre Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 27 
		} 
	},
	{
		name:    `National Spanish Paella Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 27 
		}
	},
	{
		name: `National Joe Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 27 
		} 
	},
	{
		name:    `National Triglycerides Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 28 
		}
	},
	{
		name:    `National Black Forest Cake Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 28 
		}
	},
	{
		name:    `National Something On A Stick Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 28 
		}
	},
	{
		name:    `National Weed Appreciation Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 28 
		}
	},
	{
		name:    `American Diabetes Association Alert Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.march,
			order:     4,
			dayOfWeek: NATIVE_DAYS_OF_WEEK.tuesday
		}
	},
	{
		name:    `National Pita Day`,
		pattern: {
			type:  RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day:   29
		}
	},
	{
		name: `National Nevada Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 29 
		} 
	},
	{
		name:    `National Vietnam War Veterans Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 29 
		}
	},
	{
		name:    `National Little Red Wagon Day`,
		pattern: {
			type:      RepeatPatternType.relative,
			month:     NATIVE_MONTHS.march,
			order:     'last',
			dayOfWeek: NATIVE_DAYS_OF_WEEK.wednesday
		}
	},
	{
		name:    `National Lemon Chiffon Cake Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 29 
		}
	},
	{
		name:    `National Mom And Pop Business Owners Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 29 
		}
	},
	{
		name:    `Manatee Appreciation Day`,
		pattern: {
			type:  RepeatPatternType.relative,
			month: NATIVE_MONTHS.march,
			order: 'last',
			dayOfWeek: NATIVE_DAYS_OF_WEEK.wednesday
		}
	},
	{
		name:    `National Virtual Vacation Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		}
	},
	{
		name: `World Bipolar Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		} 
	},
	{
		name:    `National Turkey Neck Soup Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		}
	},
	{
		name: `National Pencil Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		} 
	},
	{
		name: `National Doctors Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		} 
	},
	{
		name:    `National I Am In Control Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		}
	},
	{
		name:    `National Take A Walk In The Park Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 30 
		}
	},
	{
		name: `National Crayon Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 31 
		} 
	},
	{
		name: `National Prom Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 31 
		} 
	},
	// { name:    `Take Down Tobacco National Day Of Action`, pattern: { type: RepeatPatternType.relative, month: NATIVE_MONTHS.march } },
	{
		name:    `National Clams On The Half Shell Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 31 
		}
	},
	{
		name:    `National Bunsen Burner Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 31 
		}
	},
	{
		name: `National Tater Day`,
		pattern: {
			type: RepeatPatternType.absolute,
			month: NATIVE_MONTHS.march,
			day: 31 
		} 
	},
];
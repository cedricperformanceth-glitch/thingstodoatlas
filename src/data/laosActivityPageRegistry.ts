import { tadLoExperiences } from './tadLoPlaces';

export type ActivityPageFact = {
  label: string;
  value: string;
};

export type ActivityPageFaq = {
  question: string;
  answer: string;
};

export type ActivityPageEntry = {
  slug: string;
  citySlug: string;
  cityName: string;
  countryName: string;
  route: string;
  sourceRoute: string;
  sourceLabel: string;
  sourceUrl: string;
  eyebrow: string;
  title: string;
  contextLine: string;
  intro: string;
  image: string;
  imageAlt: string;
  facts: ActivityPageFact[];
  sessionTitle: string;
  sessionParagraphs: string[];
  bookingTitle: string;
  bookingParagraphs: string[];
  bookingFacts: ActivityPageFact[];
  note: string;
  faq: ActivityPageFaq[];
  adSlots: 1 | 2 | 3 | 4;
};

const cookingClass = tadLoExperiences.find((place) => place.slug === 'cooking-class-nyay');

if (!cookingClass) {
  throw new Error('Missing Tad Lo activity: cooking-class-nyay');
}

export const laosActivityPages: ActivityPageEntry[] = [
  {
    slug: 'cooking-class-nyay',
    citySlug: 'tad-lo',
    cityName: 'Tad Lo',
    countryName: 'Laos',
    route: '/laos/tad-lo/activities/cooking-class-nyay',
    sourceRoute: '/laos/tad-lo',
    sourceLabel: 'Visit Tad Lo',
    sourceUrl: 'https://visit-tadlo.com/en/things-to-do/cooking-class-nyay',
    eyebrow: 'ACTIVITY NOTE · FOOD WORKSHOP · TAD LO',
    title: 'Lao Cooking Class with Nyay',
    contextLine: 'Half day · Easy · Walkable · Meal included',
    intro:
      'A relaxed local cooking workshop where the point is simple: prepare the meal together, understand a little more of what is on the table, then sit down and eat it.',
    image: cookingClass.image,
    imageAlt: cookingClass.imageAlt,
    facts: [
      { label: 'Time', value: 'Half day' },
      { label: 'Difficulty', value: 'Easy' },
      { label: 'Transport', value: 'Walkable from Tad Lo' },
      { label: 'Booking', value: 'Required in advance' }
    ],
    sessionTitle: 'Choose the meal, then build the workshop around it',
    sessionParagraphs: [
      'Visit Tad Lo lists two simple ways to organise the class: choose a morning session and the meal becomes lunch, or choose an afternoon session and finish with dinner.',
      'The meal is included in the experience. Vegetarian and non-vegetarian options are possible, but they should be confirmed when arranging the class rather than assumed on arrival.'
    ],
    bookingTitle: 'A few details are better confirmed before you walk over',
    bookingParagraphs: [
      'This is a locally organised activity rather than a fixed daily attraction, so advance organisation matters. Visit Tad Lo currently advises travellers to reconfirm the exact meeting point, price, number of dishes and precise duration when booking.',
      'Tell the host about food allergies and dietary requirements before the class. That is more important here than arriving with a perfect itinerary.'
    ],
    bookingFacts: [
      { label: 'Price', value: 'Confirm when booking' },
      { label: 'Meeting point', value: 'Confirm locally; the activity is listed as walkable' },
      { label: 'Food options', value: 'Vegetarian and non-vegetarian, subject to confirmation' },
      { label: 'Included', value: 'The meal you prepare' }
    ],
    note: 'Keep this one simple. Pick morning or afternoon, confirm the practical details, and arrive hungry.',
    faq: [
      {
        question: 'How long is the cooking class in Tad Lo?',
        answer: 'Visit Tad Lo lists it as a half-day activity. The exact duration should be confirmed when you book.'
      },
      {
        question: 'Can I do the class without a motorbike?',
        answer: 'Yes. The activity is listed as walkable and suitable for travellers without personal transport. Confirm the exact meeting point before leaving your accommodation.'
      },
      {
        question: 'Is food included?',
        answer: 'Yes. The class ends with the local meal prepared during the workshop.'
      },
      {
        question: 'Is there a vegetarian option?',
        answer: 'Vegetarian and non-vegetarian options are listed, but your choice should be confirmed in advance.'
      },
      {
        question: 'How much does the Lao cooking class cost?',
        answer: 'Visit Tad Lo currently asks travellers to confirm the current price when arranging the activity, so the Atlas does not publish an unverified amount.'
      },
      {
        question: 'Do I need to book ahead?',
        answer: 'Yes. Advance organisation is required, and allergies or other dietary requirements should be disclosed when booking.'
      }
    ],
    adSlots: 1
  }
];

export const laosActivityPageByRoute = Object.fromEntries(
  laosActivityPages.map((entry) => [entry.route, entry])
) as Record<string, ActivityPageEntry>;

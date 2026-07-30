export type TadLoPartnerPlace = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  cuisine: string;
  city: string;
  country: string;
  image: string;
  imageAlt: string;
  galleryImages?: Array<{ src: string; alt: string }>;
  cardNote: string;
  shortDescription: string;
  description: string;
  whyWeRecommend: string;
  highlights: string[];
  mapsUrl: string;
  mapLabel: string;
  partnerUrl: string;
  partnerName: string;
  status: 'demo' | 'needs-review' | 'verified';
  lastChecked: string;
  hours: string;
  price: string;
  address: string;
  bestFor: string;
};

const partnerName = 'Visit Tad Lo';
const partnerMap = 'https://visit-tadlo.com/en/map';
const fallback = '/images/laos/tad-lo.webp';

const makePlace = (place: Partial<TadLoPartnerPlace> & Pick<TadLoPartnerPlace, 'slug' | 'name' | 'subcategory' | 'shortDescription' | 'description' | 'partnerUrl'>): TadLoPartnerPlace => ({
  category: 'things-to-do',
  cuisine: 'Local experience',
  city: 'Tad Lo',
  country: 'Laos',
  image: fallback,
  imageAlt: `${place.name} near Tad Lo in southern Laos`,
  cardNote: 'locally checked field note',
  whyWeRecommend: 'This locally documented stop adds a different rhythm to a stay in Tad Lo. Confirm changing conditions and availability before setting out.',
  highlights: ['Locally documented', 'Independent travel', 'Southern Laos'],
  mapsUrl: partnerMap,
  mapLabel: 'Open the Visit Tad Lo map',
  partnerName,
  status: 'verified',
  lastChecked: 'Visit Tad Lo · July 2026',
  hours: 'Confirm current conditions locally',
  price: 'Confirm current price locally',
  address: 'Tad Lo · Salavan Province',
  bestFor: 'Adding a locally checked stop to the trip',
  ...place
});

export const tadLoExperiences: TadLoPartnerPlace[] = [
  makePlace({
    slug: 'tad-hang-waterfall',
    name: 'Tad Hang Waterfall',
    subcategory: 'Waterfall · Walkable',
    cuisine: 'Waterfalls and swimming',
    cardNote: 'start close to the village',
    shortDescription: 'The easiest first waterfall from the village, close to food, stays and everyday local life.',
    description: 'Tad Hang is a natural first stop in Tad Lo. It is easy to combine with a village walk, a meal or another nearby activity without turning the day into a race.',
    whyWeRecommend: 'Begin here after arrival or when you want a gentle first look at the river. Follow current local advice before swimming.',
    highlights: ['Walkable', 'Less than three hours', 'Easy first stop', 'Seasonal water conditions'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/tad-hang-waterfall',
    hours: 'Natural site · visit in daylight',
    price: 'Check current access information',
    bestFor: 'A simple first waterfall on foot'
  }),
  makePlace({
    slug: 'tad-lo-waterfall',
    name: 'Tad Lo Waterfall',
    subcategory: 'Waterfall · Walkable',
    cuisine: 'Waterfalls and swimming',
    image: '/images/tad-lo/Tad lo 02.webp',
    imageAlt: 'Tad Lo Waterfall flowing through the village landscape',
    galleryImages: [
      { src: '/images/tad-lo/Tad lo 02.webp', alt: 'Tad Lo Waterfall flowing through the village landscape' }
    ],
    cardNote: 'waterfall woven into village life',
    shortDescription: 'A graceful waterfall best experienced slowly as part of a day around the village.',
    description: 'Follow the nearby paths, pause beside the river and notice how Tad Lo Waterfall changes with the light, rain and season.',
    whyWeRecommend: 'Combine it with Tad Hang, a local meal and a slow village walk. Check the current flow before approaching the water.',
    highlights: ['About 1.1 km from the tourism office', 'Walkable', 'Easy', 'Public access'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/tad-lo-waterfall',
    hours: 'Natural site · visit in daylight',
    price: 'Public access is free; confirm any private access fee',
    bestFor: 'An unhurried waterfall afternoon'
  }),
  makePlace({
    slug: 'tad-soung-waterfall',
    name: 'Tad Soung Waterfall',
    subcategory: 'Waterfall · Rural excursion',
    cuisine: 'Waterfalls and swimming',
    image: '/images/tad-lo/Tad Soung 01.webp',
    imageAlt: 'Tad Soung Waterfall near Tad Lo in southern Laos',
    galleryImages: [
      { src: '/images/tad-lo/Tad Soung 01.webp', alt: 'Tad Soung Waterfall near Tad Lo in southern Laos' },
      { src: '/images/tad-lo/Tad Soung.webp', alt: 'Tad Soung Waterfall in the surrounding forest' }
    ],
    cardNote: 'keep half a day for the road',
    shortDescription: 'A higher waterfall reached through fields and villages, with wide views and a longer outing.',
    description: 'Tad Soung turns the waterfall visit into a rural half-day journey. Upper and lower access points offer different experiences.',
    whyWeRecommend: 'Choose it when you have enough daylight and can confirm current access and water levels locally.',
    highlights: ['Half day', 'About 4 km from Tad Lo', 'Transport useful', 'Season-sensitive flow'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/tad-soung-waterfall',
    hours: 'Plan the route in daylight',
    price: 'Confirm current local access information',
    bestFor: 'A waterfall and countryside half-day'
  }),
  makePlace({
    slug: 'katu-weaving-workshop',
    name: 'Katu Weaving Workshop',
    subcategory: 'Culture · Workshop',
    cuisine: 'Culture and local skills',
    image: 'https://ddylijzqbzdbskxoujlv.supabase.co/storage/v1/object/public/site-media/activities/91bb4b97-122a-46df-8622-c0f8560243d4-Weaving.png',
    cardNote: 'patience becomes visible here',
    shortDescription: 'A hands-on introduction to weaving posture, technique and the time behind handmade textiles.',
    description: 'Spend roughly half a day learning how rhythm, posture and repeated gestures come together in local textile work.',
    whyWeRecommend: 'Choose it for exchange and participation rather than observation alone. Booking and host details should be confirmed through the local partner.',
    highlights: ['Half day', 'Walkable', 'Hands-on activity', 'Booking required'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/katu-weaving-workshop',
    status: 'needs-review',
    hours: 'Advance organisation required',
    bestFor: 'Learning a local skill slowly'
  }),
  makePlace({
    slug: 'cooking-class-nyay',
    name: 'Lao Cooking Class with Nyay',
    subcategory: 'Food · Workshop',
    cuisine: 'Culture and local skills',
    image: 'https://ddylijzqbzdbskxoujlv.supabase.co/storage/v1/object/public/site-media/activities/dad1856b-86a9-470f-8eaa-3aab5e7461bf-Niay-Cooking-Class.png',
    cardNote: 'prepare it, understand it, share it',
    shortDescription: 'A relaxed half-day class that ends with a local meal prepared together.',
    description: 'Choose a morning class for lunch or an afternoon class for dinner, with dietary options to confirm before booking.',
    whyWeRecommend: 'This turns one meal into a deeper local experience. Disclose allergies and dietary requirements when arranging it.',
    highlights: ['Half day', 'Walkable', 'Meal included', 'Booking required'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/cooking-class-nyay',
    status: 'needs-review',
    hours: 'Morning or afternoon by arrangement',
    bestFor: 'A shared local meal and practical workshop'
  }),
  makePlace({
    slug: 'fandee-adventure-park',
    name: 'Fandee Adventure Park',
    subcategory: 'Adventure · Walkable',
    cuisine: 'Adventure',
    image: '/images/tad-lo/fandee adventure park 01.webp',
    imageAlt: 'Fandee Adventure Park in Tad Lo, southern Laos',
    galleryImages: [
      { src: '/images/tad-lo/fandee adventure park 01.webp', alt: 'Fandee Adventure Park in Tad Lo, southern Laos' },
      { src: '/images/tad-lo/fandee adventure park 02.webp', alt: 'Forest adventure course at Fandee Adventure Park' },
      { src: '/images/tad-lo/Fandee adventure park.webp', alt: 'Fandee Adventure Park activity area' }
    ],
    cardNote: 'a little height between slow days',
    shortDescription: 'A guided forest course with thirteen ziplines and suspended bridges close to the village.',
    description: 'The course at Fandee Island adds an active half-day with safety equipment, staff coaching and aerial obstacles through the forest.',
    whyWeRecommend: 'It is close enough to fit into a relaxed Tad Lo day. Confirm height requirements and current sessions before visiting.',
    highlights: ['Thirteen ziplines', 'Walkable', 'Equipment included', 'Height requirement'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/fandee-adventure-park',
    hours: 'Confirm current sessions',
    bestFor: 'A short guided forest adventure'
  }),
  makePlace({
    slug: 'mr-hook-coffee-culture',
    name: 'Coffee and Katu Culture with Mr Hook',
    subcategory: 'Coffee · Culture',
    cuisine: 'Coffee experiences',
    image: '/images/tad-lo/Mr Hook 01.webp',
    imageAlt: 'Coffee and Katu culture experience with Mr Hook near Tad Lo',
    galleryImages: [
      { src: '/images/tad-lo/Mr Hook 01.webp', alt: 'Coffee and Katu culture experience with Mr Hook near Tad Lo' },
      { src: '/images/tad-lo/Mr Hook 02.webp', alt: 'Mr Hook coffee and Katu culture experience' }
    ],
    cardNote: 'coffee is only the doorway',
    shortDescription: 'A personal introduction to coffee, useful plants and Katu cultural perspectives in Mr Hook’s home area.',
    description: 'The experience connects coffee growing with plants, place and local cultural context rather than functioning as a simple tasting stop.',
    whyWeRecommend: 'Choose it when you want the plateau to feel inhabited and understood, not only scenic.',
    highlights: ['Half day', 'About 15 km from Tad Lo', 'Transport useful', 'Coffee and culture'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/mr-hook-coffee-culture',
    hours: 'By arrangement',
    bestFor: 'Coffee, plants and cultural exchange'
  }),
  makePlace({
    slug: 'mr-vieng-coffee-experience',
    name: 'Coffee from Tree to Cup with Mr Vieng',
    subcategory: 'Coffee · Producer visit',
    cuisine: 'Coffee experiences',
    image: 'https://ddylijzqbzdbskxoujlv.supabase.co/storage/v1/object/public/site-media/accommodation/c0632601-bb76-41a3-947e-2e47a3a7c88f-Mr-Vieng.jpg',
    imageAlt: 'Coffee producer visit near Laongam in southern Laos',
    cardNote: 'follow the bean all the way',
    shortDescription: 'A friendly introduction to coffee growing, processing and preparation near Laongam.',
    description: 'Follow coffee from the tree through the stages that shape the final cup in an experience lasting roughly ninety minutes.',
    whyWeRecommend: 'Save it for a day when you already have transport and want one focused producer visit.',
    highlights: ['Around ninety minutes', 'About 30 km from Tad Lo', 'Easy', 'English useful'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/mr-vieng-coffee-experience',
    status: 'needs-review',
    hours: 'Check current visiting times',
    bestFor: 'A concise tree-to-cup visit'
  }),
  makePlace({
    slug: 'vat-paa-ancient-forest',
    name: 'Vat Paa Forest, Buddha and Mystery Cave',
    subcategory: 'Nature · Forest visit',
    cuisine: 'Nature and excursions',
    image: 'https://ddylijzqbzdbskxoujlv.supabase.co/storage/v1/object/public/site-media/accommodation/a42fc69b-975d-4df1-9d73-ffbb805c06a7-Vat-Paa.jpg',
    cardNote: 'stay with the forest, not the cave',
    shortDescription: 'A quiet forest site with mature trees, a large Buddha and an intriguing cave entrance.',
    description: 'Walk beneath the forest canopy, visit the Buddha and observe the cave area without treating an unassessed underground route as a casual attraction.',
    whyWeRecommend: 'It is a quiet counterpoint to waterfalls and workshops. Do not enter an unlit cave without a competent guide and suitable equipment.',
    highlights: ['Less than three hours', 'Easy surface visit', 'Transport useful', 'Cave entry not recommended'],
    partnerUrl: 'https://visit-tadlo.com/en/things-to-do/vat-paa-ancient-forest',
    status: 'needs-review',
    hours: 'Visit in daylight',
    price: 'Free access information listed by the partner',
    bestFor: 'A calm forest and cultural stop'
  })
];

export const tadLoLocalAddresses: TadLoPartnerPlace[] = [
  makePlace({
    slug: 'fandee-island',
    name: 'Fandee Island',
    category: 'accommodation',
    subcategory: 'Stay · Restaurant · Activity',
    cuisine: 'Lao, Asian and Western food',
    cardNote: 'sleep differently beside the lake',
    shortDescription: 'Unusual stays, lakeside food and a forest adventure park within walking distance of the village.',
    description: 'Fandee Island combines tree houses, lake houses, dome and family accommodation with a relaxed restaurant and nearby adventure course.',
    whyWeRecommend: 'It works for an unusual overnight stay, a meal beside the lake or an active half-day without reorganising the whole trip.',
    highlights: ['Unusual accommodation', 'Lakeside restaurant', 'Walkable', 'Adventure park'],
    partnerUrl: 'https://visit-tadlo.com/en/stay-eat/fandee-island',
    hours: 'Restaurant listed 07:00–21:00; confirm current hours',
    price: 'Rooms listed from 350,000 LAK; confirm availability',
    address: 'Fandee Island · near Tad Lo village',
    bestFor: 'A stay, meal and activity in one place'
  }),
  makePlace({
    slug: 'bolaven-garden',
    name: 'Bolaven Garden',
    category: 'accommodation',
    subcategory: 'Lodge · Riverside',
    cuisine: 'Local, Thai, Asian and barbecue',
    cardNote: 'a slower garden base',
    shortDescription: 'A leafy riverside lodge with bungalows, tents, outdoor space and an on-site restaurant.',
    description: 'Bolaven Garden offers several styles of accommodation with garden or river views, plus a restaurant, bar, terrace and practical parking.',
    whyWeRecommend: 'Keep it when you want a calm base where dinner and downtime do not require another trip across the village.',
    highlights: ['Riverside setting', 'Bungalows and tents', 'Restaurant and bar', 'Motorbike parking'],
    partnerUrl: 'https://visit-tadlo.com/en/stay-eat/bolaven-garden',
    hours: 'Confirm restaurant and reception hours',
    price: 'Bungalow listed at 800,000 LAK; confirm current rate',
    bestFor: 'A comfortable riverside base'
  }),
  makePlace({
    slug: 'mama-pap',
    name: 'Mama Pap',
    category: 'accommodation',
    subcategory: 'Homestay · Restaurant',
    cuisine: 'Local food',
    cardNote: 'a known village address',
    shortDescription: 'A locally known homestay and restaurant in the centre of Tad Lo.',
    description: 'Mama Pap is one of the practical village addresses mapped by Visit Tad Lo, combining a place to stay with local food.',
    highlights: ['Central Tad Lo', 'Homestay', 'Restaurant', 'Locally mapped'],
    partnerUrl: 'https://visit-tadlo.com/en/stay-eat/mama-pap',
    address: 'Tad Lo Centre',
    bestFor: 'A central local stay and meal'
  }),
  makePlace({
    slug: 'tad-lo-lodge',
    name: 'Tad Lo Lodge',
    category: 'accommodation',
    subcategory: 'Lodge · Waterfall location',
    cuisine: 'Lodge restaurant',
    image: '/images/tad-lo/TadLoLodge 01.webp',
    imageAlt: 'Tad Lo Lodge beside the waterfall landscape',
    galleryImages: [
      { src: '/images/tad-lo/TadLoLodge 01.webp', alt: 'Tad Lo Lodge beside the waterfall landscape' },
      { src: '/images/tad-lo/Tadlo Loge02.webp', alt: 'Tad Lo Lodge in Tad Lo village' }
    ],
    cardNote: 'stay close to the falls',
    shortDescription: 'A lodge in a prominent position near Tad Lo Waterfall.',
    description: 'Tad Lo Lodge suits travellers who want the waterfall landscape to remain part of the stay rather than only a daytime visit.',
    highlights: ['Near Tad Lo Waterfall', 'Lodge setting', 'Locally mapped'],
    partnerUrl: 'https://visit-tadlo.com/en/stay-eat/tad-lo-lodge',
    address: 'Tad Lo Waterfall area',
    bestFor: 'Staying close to the waterfall landscape'
  }),
  makePlace({
    slug: 'tim-restaurant-massage',
    name: 'Tim Restaurant & Massage',
    category: 'restaurants',
    subcategory: 'Restaurant · Massage',
    cuisine: 'Local village restaurant',
    cardNote: 'food first, massage by arrangement',
    shortDescription: 'A village restaurant with traditional Lao massage available by arrangement.',
    description: 'Tim combines a practical local meal stop with massage that can be organised separately after walking, riding or a waterfall day.',
    highlights: ['Tad Lo Centre', 'Local restaurant', 'Traditional massage', 'Arrange in advance'],
    partnerUrl: 'https://visit-tadlo.com/en/stay-eat/tim-restaurant-massage',
    address: 'Tad Lo Centre',
    bestFor: 'A meal and optional massage'
  }),
  makePlace({
    slug: 'tad-lo-tourism-office',
    name: 'Tad Lo Tourism Office',
    category: 'essential-information',
    subcategory: 'Tourism information · Guides',
    cuisine: 'Official local information',
    cardNote: 'confirm the road before leaving',
    shortDescription: 'The local source for official guided treks, guides and current destination information.',
    description: 'Use the tourism office to verify treks, guides, transport and conditions that may have changed since an online guide was updated.',
    highlights: ['Official information', 'Guided treks', 'Transport checks', 'Tad Lo Centre'],
    partnerUrl: 'https://visit-tadlo.com/en/stay-eat/tad-lo-tourism-office',
    hours: 'Confirm current office hours',
    price: 'Information is free; tours and transport vary',
    address: 'Tad Lo Centre',
    bestFor: 'Current guidance before a trek or transfer'
  })
];

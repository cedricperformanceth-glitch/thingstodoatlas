import type { Place } from './atlas';

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const islandImages = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det-laos.JPG?width=1200',
    alt: 'Calm Mekong scenery around Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Storm_in_Don_Det_tree_and_river_Laos.jpg?width=1200',
    alt: 'The Mekong and trees around Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sky_boat_water_don_det_4000_islands.jpg?width=1200',
    alt: 'A small boat on the Mekong near Don Det, used as island context imagery'
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Si_Phan_Don_-_bridge_from_Don_Det_to_Don_Khone_-_Aug_2024.jpg?width=1200',
    alt: 'The bridge between Don Det and Don Khon, used as island context imagery'
  }
];

export const donDetEssentialInformation: Place[] = [
  {
    slug: 'khon-health-center-khon-nua',
    name: 'Khon Health Center · Khon Nua',
    category: 'essential-information',
    subcategory: 'Hospital & health center',
    cuisine: 'Medical help',
    city: 'Don Khon',
    country: 'Laos',
    image: islandImages[3].src,
    imageAlt: islandImages[3].alt,
    cardNote: 'the nearest basic medical stop',
    shortDescription: 'A small public health center in Khon Nua on Don Khon for basic medical help, minor illness and first assessment.',
    description: 'Khon Health Center is the closest practical medical address for travellers staying on Don Det or Don Khon. It should be treated as a basic local health center rather than a fully equipped hospital.',
    whyWeRecommend: 'Save this address before you need it. For serious injuries, severe illness or emergencies requiring advanced care, arrange transport to a larger hospital on the mainland or in Pakse.',
    highlights: ['Basic medical help', 'Khon Nua', 'Near Don Det', 'Not a full-service hospital'],
    mapsUrl: mapsSearch('Khon Health Center Khon Nua Don Khon Laos'),
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: 'Confirm opening hours locally before travelling',
    price: 'Public health-center fees may apply',
    address: 'Khon Nua, Don Khon, Khong District, Champasak Province, Laos',
    bestFor: 'Minor illness, first assessment and basic local medical help',
    imageIsGeneric: true
  },
  {
    slug: 'don-det-ferry-pier',
    name: 'Don Det Ferry',
    category: 'essential-information',
    subcategory: 'Ferry & boat connection',
    cuisine: 'Transport',
    city: 'Don Det',
    country: 'Laos',
    image: islandImages[2].src,
    imageAlt: islandImages[2].alt,
    cardNote: 'the boat connection to Nakasang',
    shortDescription: 'The main Don Det boat landing for crossings to Nakasang and connections toward buses, minivans and onward routes.',
    description: 'Don Det Ferry is the practical island departure point for the short boat crossing to Nakasang on the mainland. Boat timing can depend on passengers, daylight and local arrangements.',
    whyWeRecommend: 'Save the pier before arrival and before departure day. Confirm the final boat and transport schedule locally, especially for early buses, late arrivals or border connections.',
    highlights: ['Nakasang crossing', 'Main island pier', 'Boat and bus connection', 'Confirm departure times'],
    mapsUrl: mapsSearch('Don Det Ferry Boat Pier Laos'),
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: 'Boats normally operate during daylight; confirm the current schedule locally',
    price: 'Boat fares vary by route, time and passenger numbers',
    address: 'Main pier, northern Don Det, Khong District, Champasak Province, Laos',
    bestFor: 'Arriving on Don Det and connecting back to Nakasang',
    imageIsGeneric: true
  }
];

const activitySeeds = [
  {
    slug: 'e-toud-waterfall',
    name: 'E-Toud Waterfall',
    subcategory: 'Waterfall & kayak stop',
    cardNote: 'reach it from the river',
    shortDescription: 'A remote waterfall stop commonly reached as part of a kayak or boat route through the southern islands.',
    description: 'E-Toud Waterfall lies away from the normal Don Det bicycle routes and is generally approached from the water. Access and swimming conditions depend heavily on current, weather and the operator used.',
    whyWeRecommend: 'Keep it for an organised river day rather than trying to reach it independently on foot. Confirm life jackets, dry bags and current conditions before departure.',
    highlights: ['Kayak or boat access', 'Remote waterfall', 'River-current awareness', 'Guide recommended'],
    hours: 'Daylight visit; confirm the tour departure time',
    price: 'Usually included in a kayak or boat excursion',
    address: 'Near Don Xom, Si Phan Don, Champasak Province, Laos',
    bestFor: 'A guided kayak or boat excursion',
    query: 'E Toud Waterfall Don Xom Laos'
  },
  {
    slug: 'don-xom-island',
    name: 'Don Xom',
    subcategory: 'Rural Mekong island',
    cardNote: 'leave the main tourist islands',
    shortDescription: 'A quieter inhabited island in Si Phan Don, reached by local boat for village landscapes and a slower view of the archipelago.',
    description: 'Don Xom offers a more rural island chapter than Don Det. Travel is informal, signs are limited and visits should respect village life and local boat arrangements.',
    whyWeRecommend: 'Save it for a boat day when you want to see another side of Si Phan Don beyond the main guesthouse islands.',
    highlights: ['Rural island', 'Local boat access', 'Village landscapes', 'Low-tourism atmosphere'],
    hours: 'Visit during daylight and arrange the return boat in advance',
    price: 'Negotiate the boat journey before departure',
    address: 'Don Xom, Si Phan Don, Khong District, Champasak Province, Laos',
    bestFor: 'A quieter island excursion by boat',
    query: 'Don Xom Si Phan Don Laos'
  },
  {
    slug: 'khone-pa-soy-waterfall',
    name: 'Khone Pa Soy Waterfall',
    subcategory: 'Waterfall & suspension bridge',
    cardNote: 'a quieter Don Khon waterfall',
    shortDescription: 'A less-visited waterfall area on Don Khon reached along island roads and paths near the eastern side of the island.',
    description: 'Khone Pa Soy is smaller and quieter than Li Phi, with access historically involving wooden paths and a suspension bridge. Conditions can change after floods or repairs.',
    whyWeRecommend: 'Save it as a secondary Don Khon waterfall, but check the condition of the bridge and access path locally before setting out.',
    highlights: ['Don Khon route', 'Quieter waterfall', 'Suspension-bridge area', 'Access needs checking'],
    hours: 'Daylight visit only',
    price: 'Access is often free, but confirm locally',
    address: 'Eastern Don Khon, Si Phan Don, Champasak Province, Laos',
    bestFor: 'Cyclists looking beyond the main waterfall park',
    query: 'Khone Pa Soy Waterfall Don Khon Laos'
  },
  {
    slug: 'hidden-waterfall-sanctuary',
    name: 'Hidden Waterfall Sanctuary',
    subcategory: 'Local waterfall stop',
    cardNote: 'a field note still to verify',
    shortDescription: 'A locally listed waterfall sanctuary saved as a field-note destination for further on-island verification.',
    description: 'Hidden Waterfall Sanctuary is included under the name used locally and on map searches. Exact access, facilities and seasonal conditions should be confirmed on Don Det before travelling.',
    whyWeRecommend: 'Keep the address in the notebook, but treat it as a locally verified lead rather than a fully documented attraction until the route has been checked in person.',
    highlights: ['Local map listing', 'Waterfall setting', 'Seasonal access', 'Field verification needed'],
    hours: 'Confirm locally before visiting',
    price: 'Confirm locally before visiting',
    address: 'Si Phan Don, Khong District, Champasak Province, Laos',
    bestFor: 'Travellers checking lesser-known local waterfall routes',
    query: 'Hidden Waterfall Sanctuary Don Det Laos'
  },
  {
    slug: 'xai-kong-nyai-beach',
    name: 'Xai Kong Nyai Beach',
    subcategory: 'Mekong beach',
    cardNote: 'a beach stop on Don Khon',
    shortDescription: 'A sandy Don Khon river beach with simple food stops and long-tail boats, suitable for a slower break during an island loop.',
    description: 'Xai Kong Nyai Beach sits downstream from Li Phi on Don Khon. Swimming may be possible close to shore, but Mekong currents remain changeable and require caution.',
    whyWeRecommend: 'Save it as the calm pause in a Don Khon cycling day. Stay close to shore and ask locally about the current before entering the water.',
    highlights: ['Don Khon beach', 'Simple restaurants', 'Long-tail boats', 'Current awareness'],
    hours: 'Best during daylight, especially late morning or afternoon',
    price: 'Beach access is generally free; food and boats cost extra',
    address: 'Xai Kong Nyai, Don Khon, Si Phan Don, Champasak Province, Laos',
    bestFor: 'A beach break during a Don Khon island loop',
    query: 'Xai Kong Nyai Beach Don Khon Laos'
  },
  {
    slug: 'si-phan-don-boat-exploration',
    name: 'Si Phan Don',
    subcategory: 'Four Thousand Islands boat route',
    cardNote: 'explore beyond Don Det',
    shortDescription: 'A broader boat journey through the channels, inhabited islands and small river landscapes of the Four Thousand Islands.',
    description: 'Si Phan Don is the wider Mekong archipelago surrounding Don Det. A local boat trip can link quieter islands, fishing villages, sunset channels and river viewpoints.',
    whyWeRecommend: 'Save this as a flexible half-day or full-day boat idea rather than one fixed attraction. Agree on the route, duration, life jackets and return time before departure.',
    highlights: ['Boat exploration', 'Multiple islands', 'Fishing villages', 'Sunset routes'],
    hours: 'Daylight boat trip; sunset routes should return before dark',
    price: 'Boat prices depend on duration, route and group size',
    address: 'Si Phan Don, Khong District, Champasak Province, Laos',
    bestFor: 'Seeing the archipelago beyond Don Det and Don Khon',
    query: 'Si Phan Don Four Thousand Islands Laos'
  },
  {
    slug: 'li-phi-somphamit-waterfalls',
    name: 'Li Phi · Somphamit Waterfalls',
    subcategory: 'Waterfall park',
    cardNote: 'the main Don Khon rapids',
    shortDescription: 'A powerful chain of Mekong rapids and waterfalls on Don Khon, reached by bicycle or on foot from the old railway bridge.',
    description: 'Li Phi, also called Tad Somphamit, is the principal waterfall park on Don Khon. The water is extremely powerful, so visitors must remain behind barriers and avoid unsafe swimming areas.',
    whyWeRecommend: 'This is one of the essential Don Khon stops and works naturally inside a bicycle day from Don Det.',
    highlights: ['Major Mekong rapids', 'Don Khon', 'Walking viewpoints', 'Strong-current danger'],
    hours: 'Typically daytime opening; confirm current park hours',
    price: 'Entrance fee applies; confirm the current amount locally',
    address: 'Don Khon Somphamit Waterfalls Park, Champasak Province, Laos',
    bestFor: 'A major waterfall stop accessible from Don Det',
    query: 'Li Phi Somphamit Waterfalls Don Khon Laos'
  },
  {
    slug: 'mekong-fly-zipline',
    name: 'The Mekong Fly Zipline',
    subcategory: 'Zipline adventure',
    cardNote: 'fly above Li Phi',
    shortDescription: 'A zipline course above the Li Phi waterfall landscape, combining multiple lines, elevated crossings and views over the rapids.',
    description: 'The Mekong Fly operates in the Somphamit waterfall area on Don Khon. Participation depends on current opening, weather, equipment rules and operator safety checks.',
    whyWeRecommend: 'Save it for a more active waterfall day, but confirm the operator is open and review the safety briefing before paying.',
    highlights: ['Zipline course', 'Li Phi waterfall views', 'Adventure activity', 'Operator safety check'],
    hours: 'Confirm current operating hours before travelling',
    price: 'Activity fee applies; confirm the current package directly',
    address: 'Somphamit Waterfalls Park, Don Khon, Champasak Province, Laos',
    bestFor: 'An active adventure above the waterfall park',
    query: 'Mekong Fly Zipline Adventure Tour Don Khon Laos'
  }
] as const;

export const donDetAdditionalThingsToDo: Place[] = activitySeeds.map((activity, index) => {
  const image = islandImages[index % islandImages.length];

  return {
    slug: activity.slug,
    name: activity.name,
    category: 'things-to-do',
    subcategory: activity.subcategory,
    cuisine: 'Experience',
    city: 'Don Det',
    country: 'Laos',
    image: image.src,
    imageAlt: image.alt,
    cardNote: activity.cardNote,
    shortDescription: activity.shortDescription,
    description: activity.description,
    whyWeRecommend: activity.whyWeRecommend,
    highlights: [...activity.highlights],
    mapsUrl: mapsSearch(activity.query),
    status: 'needs-review',
    lastChecked: 'August 2026',
    hours: activity.hours,
    price: activity.price,
    address: activity.address,
    bestFor: activity.bestFor,
    imageIsGeneric: true
  };
});

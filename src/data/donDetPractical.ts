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

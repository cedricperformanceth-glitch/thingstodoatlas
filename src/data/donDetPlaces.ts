export type DonDetStay = {
  slug: string;
  name: string;
  category: 'accommodation';
  city: 'Don Det';
  country: 'Laos';
  subcategory: string;
  image: string;
  imageAlt: string;
  imageSourceLabel: string;
  shortDescription: string;
  mapsUrl: string;
  address: string;
  statusNote: string;
};

// Shortlist formed from the current highest-rated / strongest-reviewed Don Det
// properties visible on Booking.com on 6 August 2026. Booking is used only to
// identify names. Descriptions, map links and imagery below are independent.
export const donDetStays: DonDetStay[] = [
  {
    slug: 'don-falang-homestay-private-island',
    name: 'Don Falang Homestay',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Private-island homestay',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det-laos.JPG?width=1200',
    imageAlt: 'A small boat and calm Mekong water near Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'A private-island homestay reached by a short boat transfer, with a small beach and a more hosted, secluded atmosphere than the main village.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Don%20Falang%20Homestay%20Private%20Island%20Don%20Det%20Laos',
    address: 'Don Falang, off Don Det, Khong District, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'dodand-studio-sunset-riverside',
    name: 'DODAND Studio & Sunset Riverside',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Sunset riverside studios',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Storm_in_Don_Det_tree_and_river_Laos.jpg?width=1200',
    imageAlt: 'The Mekong at dusk near Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'Sunset-side riverside studios with private terraces and direct access to the water, suited to travellers looking for a quieter island stay.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=DODAND%20Studio%20Sunset%20Riverside%20Guesthouse%20Don%20Det',
    address: 'Sunset side, Don Det, Khong District, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'dondet-vixay-sunset-river-view',
    name: 'DONDET Vixay Sunset And River View',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Riverside bungalows',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sky_boat_water_don_det_4000_islands.jpg?width=1200',
    imageAlt: 'A boat on the Mekong at twilight near Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'Family-run riverside bungalows with broad sunset views and an on-site place for meals and drinks beside the Mekong.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=DONDET%20Vixay%20Sunset%20And%20River%20View',
    address: 'Don Det Island, Khong District, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'thiptavanh-guesthouse',
    name: 'Thiptavanh Guesthouse',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Sunrise-side guesthouse',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dwellings_on_the_Mekong_bank_of_Don_Det_at_sunrise_seen_from_the_bridge_to_Don_Khon_Laos.jpg?width=1200',
    imageAlt: 'Dwellings on the Don Det riverbank at sunrise, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC BY-SA',
    shortDescription: 'A small guesthouse on the sunrise side with river-facing balconies and simple air-conditioned rooms away from the sunset-side bustle.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thiptavanh%20Guesthouse%20Don%20Det',
    address: '20 Sunrise Boulevard, Don Det, Khong District, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'moon-by-night-don-det',
    name: 'Moon By Night',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Garden bungalow stay',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Photo_laos_sky_river_tree_don_det_storm.jpg?width=1200',
    imageAlt: 'Evening light over the Mekong near Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'Quiet sunset-side bungalows with garden space, comfortable rooms and easy access to nearby bars, restaurants and river views.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Moon%20By%20Night%20Don%20Det%20Laos',
    address: 'Sunset side, Don Det, Khong District, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'don-det-hotel',
    name: 'Don Det Hotel',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Hotel with swimming pool',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Si-phan-don-4000-islands-laos.jpg?width=1200',
    imageAlt: 'Riverside scenery at Don Det in the Four Thousand Islands, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'A more polished hotel option near the northern arrival area, with a swimming pool and a sunset-facing terrace overlooking the river.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Don%20Det%20Hotel%20Laos',
    address: 'Northern Don Det, near the main arrival area, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'baba-guesthouse-don-det',
    name: 'BABA Guesthouse',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Central riverside guesthouse',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Baba_guesthouse_don_det_laos.jpg?width=1200',
    imageAlt: 'The white riverside building of BABA Guesthouse on Don Det',
    imageSourceLabel: 'PROPERTY PHOTO · CC0',
    shortDescription: 'A well-kept guesthouse near the village centre, with spacious private rooms, river or garden balconies and island activities close by.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BABA%20Guesthouse%20Don%20Det%20Laos',
    address: 'Ban Don Det, Four Thousand Islands, Khong District, Laos',
    statusNote: 'Official website checked · August 2026'
  },
  {
    slug: 'boonmy-bungalows-restaurant',
    name: 'BOONMY Bungalows & Restaurant',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Bungalows & restaurant',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det-si-phan-don.JPG?width=1200',
    imageAlt: 'A riverside table overlooking the Mekong at Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'Sunrise-side bungalows in a shaded garden, with a restaurant and an easy base for cycling around Don Det and toward Don Khon.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BOONMY%20Bungalows%20Restaurant%20Don%20Det',
    address: 'Sunrise side, Don Det, Khong District, Champasak Province, Laos',
    statusNote: 'Official website checked · August 2026'
  },
  {
    slug: 'namknong-view-don-det',
    name: 'Namknong View',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Sunset-view guesthouse',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det-don-khon.JPG?width=1200',
    imageAlt: 'A balcony overlooking the Mekong near Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'A sunset-side guesthouse with river-facing verandas and hammocks, slightly removed from the busiest part of the main village.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Namknong%20View%20Don%20Det',
    address: 'Sunset side, Don Det, Khong District, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  },
  {
    slug: 'dondet-garden-guest-house',
    name: 'DONDET Garden Guest House',
    category: 'accommodation',
    city: 'Don Det',
    country: 'Laos',
    subcategory: 'Garden bungalows',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Don-det.JPG?width=1200',
    imageAlt: 'Green riverside scenery on Don Det, used as island context imagery',
    imageSourceLabel: 'ISLAND CONTEXT · CC0',
    shortDescription: 'Simple garden bungalows a short walk from the arrival area, practical for travellers who want to remain close to the pier and village services.',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=DONDET%20Garden%20Guest%20House',
    address: 'Near the main pier, Don Det, Khong District, Champasak Province, Laos',
    statusNote: 'Independent profile · checked August 2026'
  }
];
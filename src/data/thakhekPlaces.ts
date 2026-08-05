import { resolvePlaceImages } from './placeImageResolver';

export type ThakhekMapPlace = {
  slug: string;
  name: string;
  category: 'restaurants' | 'cafes' | 'guesthouses' | 'scooter-rental' | 'markets-shopping' | 'essential-information' | 'things-to-do';
  city: 'Thakhek';
  country: 'Laos';
  subcategory: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  mapsUrl: string;
  address: string;
  statusNote: string;
};

const rawThakhekMapPlaces: ThakhekMapPlace[] = [
  {
    slug: 'naga-hostel-cafe-thakhek',
    name: 'Naga Hostel & Café',
    category: 'guesthouses',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Hostel & café',
    image: '/images/places/thakhek-02.webp',
    imageAlt: 'Naga Hostel and Cafe in Thakhek, Laos',
    shortDescription: 'A clean, quiet hostel close to the Mekong and night market, with a café, restaurant and practical advice for travellers preparing the Thakhek Loop.',
    mapsUrl: 'https://www.google.com/maps/place/Naga+Hostel+%26+Caf%C3%A9/@17.3969407,104.7968431,15z/data=!4m9!3m8!1s0x313c097f41f3dc3d:0xf90061d986c62544!5m2!4m1!1i2!8m2!3d17.3969384!4d104.805503!16s%2Fg%2F11hzjwt9dm?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'No. 08, Unit 4, Thanunnokeo Road, Ban Nabo, Thakhek 12000, Laos',
    statusNote: 'Google Maps address checked · August 2026'
  },
  {
    slug: 'center-point-thakhek',
    name: 'Center Point Thakhek',
    category: 'markets-shopping',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Night market',
    image: '/images/places/center-point-thakhek.webp',
    imageAlt: 'Center Point night market in Thakhek, Laos',
    shortDescription: 'A central evening market for local food, drinks and a casual walk after sunset in Thakhek.',
    mapsUrl: 'https://www.google.com/maps/place/Center+Point+Thakhek/@17.3981014,104.7995241,17z/data=!3m1!4b1!4m6!3m5!1s0x313c08d44906cc07:0x9f6367c74a5deb9f!8m2!3d17.3981014!4d104.802099!16s%2Fg%2F11f2b6vw_b?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Center Point Thakhek, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'inthira-thakhek',
    name: 'Inthira Thakhek',
    category: 'guesthouses',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Hotel & guesthouse',
    image: '/images/places/inthira-thakhek.webp',
    imageAlt: 'Inthira Thakhek hotel in Thakhek, Laos',
    shortDescription: 'A central stay in the old-town area, convenient for the Mekong riverfront and the first or final night of the Thakhek Loop.',
    mapsUrl: 'https://www.google.com/maps/place/Inthira+Thakhek/@17.3981014,104.7995241,17z/data=!4m9!3m8!1s0x313c08d49ec885c3:0x7351ec7805686d20!5m2!4m1!1i2!8m2!3d17.3953072!4d104.8044084!16s%2Fg%2F1w2ywxy6?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Inthira Thakhek, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'soukjai-cafe-thakhek',
    name: 'Soukjai Cafe',
    category: 'cafes',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Café',
    image: '/images/places/soukjai-cafe-thakhek.webp',
    imageAlt: 'Soukjai Cafe in Thakhek, Laos',
    shortDescription: 'A café in central Thakhek for coffee, a light break and an easy stop near the old-town streets.',
    mapsUrl: 'https://www.google.com/maps/place/Soukjai+Cafe/@17.3941851,104.8012394,17z/data=!4m10!1m2!2m1!1sSoukjai+Bar+%26+Restaurant!3m6!1s0x313c08d485c5ba09:0x7670fac489b98be5!8m2!3d17.3953046!4d104.8041147!15sChhTb3VramFpIEJhciAmIFJlc3RhdXJhbnRaGiIYc291a2phaSBiYXIgJiByZXN0YXVyYW50kgEEY2FmZeABAA!16s%2Fg%2F11gbzcs9nq?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Soukjai Cafe, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'room-cafe-thakhek',
    name: 'Room Cafe Thakhek',
    category: 'cafes',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Coffee shop',
    image: '/images/places/room-cafe-thakhek.webp',
    imageAlt: 'Room Cafe Thakhek in Thakhek, Laos',
    shortDescription: 'A central coffee stop saved for a quiet break before or after heading out on the Thakhek Loop.',
    mapsUrl: 'https://www.google.com/maps/place/Room+Cafe+Thakhek/@17.4013014,104.810412,16.21z/data=!4m6!3m5!1s0x313c0963676b7e47:0xe850966166a35982!8m2!3d17.4012211!4d104.8159449!16s%2Fg%2F11rlksvd57?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Room Cafe Thakhek, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'kyoto-japanese-restaurant-thakhek',
    name: 'Kyoto Japanese Restaurant',
    category: 'restaurants',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Japanese restaurant',
    image: '/images/places/kyoto-japanese-restaurant-thakhek.webp',
    imageAlt: 'Kyoto Japanese Restaurant in Thakhek, Laos',
    shortDescription: 'A Japanese restaurant in central Thakhek for travellers looking for a change from local Lao food during a longer stay.',
    mapsUrl: 'https://www.google.com/maps/place/Kyoto+Japanese+Restaurant/@17.3953046,104.8146426,16z/data=!4m6!3m5!1s0x313c08ccee35f691:0x2e4cf3df8d996996!8m2!3d17.3953919!4d104.8146142!16s%2Fg%2F1pp2x7k1l?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Kyoto Japanese Restaurant, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'khammouan-provincial-hospital',
    name: 'Khammouan Provincial Hospital',
    category: 'essential-information',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Provincial hospital',
    image: '/images/places/khammouan-provincial-hospital.webp',
    imageAlt: 'Khammouan Provincial Hospital in Thakhek, Laos',
    shortDescription: 'The main provincial hospital address to keep saved for medical needs or emergencies while staying in Thakhek.',
    mapsUrl: 'https://www.google.com/maps/place/Khammouan+Provincial+Hospital/@17.3922481,104.8075103,15.5z/data=!4m6!3m5!1s0x313c0f2c4f3fca29:0x33fcfe15a93d66d8!8m2!3d17.3896492!4d104.8068862!16s%2Fg%2F1tf1871m?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Khammouan Provincial Hospital, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'sunset-restaurant-thakhek',
    name: 'Sunset Restaurant',
    category: 'restaurants',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Restaurant',
    image: '/images/places/sunset-restaurant-thakhek.webp',
    imageAlt: 'Sunset Restaurant in Thakhek, Laos',
    shortDescription: 'A restaurant close to the Mekong side of town, saved as an easy option for an evening meal in Thakhek.',
    mapsUrl: 'https://www.google.com/maps/place/Sunset+Restaurant/@17.3930644,104.8032753,15.5z/data=!4m6!3m5!1s0x313c0f2b66b8462d:0x380165abcb79d9cd!8m2!3d17.3919566!4d104.8042086!16s%2Fg%2F119w26nmh?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Sunset Restaurant, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'shong-fang-khong-restaurant-thakhek',
    name: 'Shong Fang Khong Restaurant',
    category: 'restaurants',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Restaurant',
    image: '/images/places/shong-fang-khong-restaurant-thakhek.webp',
    imageAlt: 'Shong Fang Khong Restaurant in Thakhek, Laos',
    shortDescription: 'A local restaurant address near the western side of central Thakhek, useful for a simple lunch or dinner stop.',
    mapsUrl: 'https://www.google.com/maps/place/Shong+Fang+Khong+Restaurant/@17.3930644,104.8032753,15.5z/data=!4m6!3m5!1s0x313c09d4f4ad8609:0xc8d4408f2a6b8b8d!8m2!3d17.3950885!4d104.8037702!16s%2Fg%2F11fp35s1v3?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Shong Fang Khong Restaurant, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'vie-de-france-thakhek',
    name: 'Vie de France',
    category: 'cafes',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Café',
    image: '/images/places/vie-de-france-thakhek.webp',
    imageAlt: 'Vie de France cafe in Thakhek, Laos',
    shortDescription: 'A café address in the northern part of central Thakhek for coffee and a slower start to the morning.',
    mapsUrl: 'https://www.google.com/maps/place/Vie+de+France/@17.3930644,104.8032753,15.5z/data=!4m6!3m5!1s0x313c09c92df3cb3d:0x35555dae9fbf2e61!8m2!3d17.3998745!4d104.8023962!16s%2Fg%2F11x1kxnr_9?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Vie de France, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'mixay-thakhek-motor-rental',
    name: 'Mixay Thakhek Motor Rental',
    category: 'scooter-rental',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Motorbike rental',
    image: '/images/places/mixay-thakhek-motor-rental.webp',
    imageAlt: 'Mixay Thakhek Motor Rental in Thakhek, Laos',
    shortDescription: 'A motorbike rental address in central Thakhek for preparing the loop; inspect the bike, tyres and rental terms before leaving.',
    mapsUrl: 'https://www.google.com/maps/place/Mixay+Thakhek+motor+rental/@17.3982967,104.8026616,16.5z/data=!4m6!3m5!1s0x313c097c1749183b:0xb7db31675b661bd1!8m2!3d17.3961142!4d104.803483!16s%2Fg%2F11h0ysfpvv?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Mixay Thakhek Motor Rental, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'pokemongo-motorbike-rental-thakhek',
    name: 'PokemonGo Motorbike Rental',
    category: 'scooter-rental',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Motorbike rental',
    image: '/images/places/pokemongo-motorbike-rental-thakhek.webp',
    imageAlt: 'PokemonGo Motorbike Rental in Thakhek, Laos',
    shortDescription: 'A second central motorbike rental option for the Thakhek Loop; check the condition of the bike and what the contract includes.',
    mapsUrl: 'https://www.google.com/maps/place/PokemonGo+Motorbike+Rental/@17.3982967,104.8026616,16.5z/data=!4m6!3m5!1s0x313c09d8c625597d:0x41ed77a43d8775bb!8m2!3d17.3990875!4d104.8022031!16s%2Fg%2F11frnx6xhz?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'PokemonGo Motorbike Rental, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'phuphakeo-resort-thakhek',
    name: 'Phuphakeo Resort',
    category: 'guesthouses',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Resort',
    image: '/images/places/phuphakeo-resort-thakhek.webp',
    imageAlt: 'Phuphakeo Resort near Thakhek, Laos',
    shortDescription: 'A resort-style stay east of central Thakhek, better suited to travellers who have their own transport.',
    mapsUrl: 'https://www.google.com/maps/place/Phuphakeo+Resort/@17.413529,104.8235773,16z/data=!4m9!3m8!1s0x313c08bdc281aeb7:0xeeb0a04b248bcff0!5m2!4m1!1i2!8m2!3d17.4134722!4d104.82885!16s%2Fg%2F11d_9kw0_s?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Phuphakeo Resort, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'nana-bungalows-thakhek',
    name: 'Nana Bungalows',
    category: 'guesthouses',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Bungalows',
    image: '/images/places/nana-bungalows-thakhek.webp',
    imageAlt: 'Nana Bungalows near Thakhek, Laos',
    shortDescription: 'Bungalow accommodation outside the centre of Thakhek, practical for travellers exploring the area by motorbike.',
    mapsUrl: 'https://www.google.com/maps/place/Nana+Bungalows/@17.4226379,104.8439378,14z/data=!4m20!1m10!3m9!1s0x313c08bdc281aeb7:0xeeb0a04b248bcff0!2sPhuphakeo+Resort!5m2!4m1!1i2!8m2!3d17.4134722!4d104.82885!16s%2Fg%2F11d_9kw0_s!3m8!1s0x313c07c4d59f7863:0x537852ac508bba61!5m2!4m1!1i2!8m2!3d17.4197801!4d104.8563174!16s%2Fg%2F11t9jkm3xf?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Nana Bungalows, Thakhek, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'kuan-cow-cave-thakhek',
    name: 'Kuan Cow Cave',
    category: 'things-to-do',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Cave',
    image: '/images/places/kuan-cow-cave-thakhek.webp',
    imageAlt: 'Kuan Cow Cave near Thakhek, Laos',
    shortDescription: 'A cave stop east of Thakhek saved as a shorter local exploration; confirm road and access conditions before setting out.',
    mapsUrl: 'https://www.google.com/maps/place/Kuan+cow+cave/@17.4226379,104.8439378,14z/data=!4m6!3m5!1s0x313c070061ed2973:0x5169e054bbfd54f6!8m2!3d17.42391!4d104.873614!16s%2Fg%2F11wr29gqns?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Kuan Cow Cave, Thakhek District, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  },
  {
    slug: 'thafalang-thakhek',
    name: 'Thafalang',
    category: 'things-to-do',
    city: 'Thakhek',
    country: 'Laos',
    subcategory: 'Riverside nature stop',
    image: '/images/places/thafalang-thakhek.webp',
    imageAlt: 'Thafalang nature stop near Thakhek, Laos',
    shortDescription: 'A countryside nature stop northeast of Thakhek for a break from the road; check access and water conditions locally.',
    mapsUrl: 'https://www.google.com/maps/place/Thafalang/@17.4500887,104.9196014,13z/data=!4m6!3m5!1s0x313c0727aeb03c17:0xca928ce0d01f9df3!8m2!3d17.4684725!4d104.912938!16s%2Fg%2F11h05bl_15?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'Thafalang, Thakhek District, Khammouane Province, Laos',
    statusNote: 'Google Maps listing supplied · August 2026'
  }
];

// Legacy short restaurant link retained outside the visible listings until a
// full Google Maps URL confirms its public name: https://maps.app.goo.gl/ykUDCDSx2PvV84UX9
export const thakhekMapPlaces = resolvePlaceImages(rawThakhekMapPlaces);
export const thakhekRestaurants = thakhekMapPlaces.filter((place) => place.category === 'restaurants');
export const thakhekCafes = thakhekMapPlaces.filter((place) => place.category === 'cafes');
export const thakhekGuesthouses = thakhekMapPlaces.filter((place) => place.category === 'guesthouses');
export const thakhekScooterRentals = thakhekMapPlaces.filter((place) => place.category === 'scooter-rental');
export const thakhekMarkets = thakhekMapPlaces.filter((place) => place.category === 'markets-shopping');
export const thakhekEssentialInformation = thakhekMapPlaces.filter((place) => place.category === 'essential-information');
export const thakhekThingsToDo = thakhekMapPlaces.filter((place) => place.category === 'things-to-do');

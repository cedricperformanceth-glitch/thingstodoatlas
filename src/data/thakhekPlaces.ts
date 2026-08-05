import { resolvePlaceImages } from './placeImageResolver';

export type ThakhekMapPlace = {
  slug: string;
  name: string;
  category: 'restaurants' | 'guesthouses';
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
    imageAlt: 'Street scene in central Thakhek, Laos',
    shortDescription: 'A clean, quiet hostel close to the Mekong and night market, with a café, restaurant and practical advice for travellers preparing the Thakhek Loop.',
    mapsUrl: 'https://www.google.com/maps/place/Naga+Hostel+%26+Caf%C3%A9/@17.3969407,104.7968431,15z/data=!4m9!3m8!1s0x313c097f41f3dc3d:0xf90061d986c62544!5m2!4m1!1i2!8m2!3d17.3969384!4d104.805503!16s%2Fg%2F11hzjwt9dm?entry=ttu&g_ep=EgoyMDI2MDgwMi4wIKXMDSoASAFQAw%3D%3D',
    address: 'No. 08, Unit 4, Thanunnokeo Road, Ban Nabo, Thakhek 12000, Laos',
    statusNote: 'Google Maps address checked · August 2026'
  }
];

// Legacy short restaurant link retained outside the visible listings until a
// full Google Maps URL confirms its public name: https://maps.app.goo.gl/ykUDCDSx2PvV84UX9
export const thakhekMapPlaces = resolvePlaceImages(rawThakhekMapPlaces);
export const thakhekRestaurants = thakhekMapPlaces.filter((place) => place.category === 'restaurants');
export const thakhekGuesthouses = thakhekMapPlaces.filter((place) => place.category === 'guesthouses');

export type ThakhekMapPlace = {
  slug: string;
  name: string;
  category: 'restaurants' | 'guesthouses';
  subcategory: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  mapsUrl: string;
  address: string;
  statusNote: string;
};

export const thakhekMapPlaces: ThakhekMapPlace[] = [
  {
    slug: 'thakhek-restaurant-map-address-01',
    name: 'Restaurant address · name to confirm',
    category: 'restaurants',
    subcategory: 'Restaurant · Google Maps address',
    image: '/images/places/thakhek-01.webp',
    imageAlt: 'Historic streets of Thakhek in central Laos',
    shortDescription: 'A first restaurant address supplied directly through Google Maps. The exact public name and practical details still need to be checked.',
    mapsUrl: 'https://maps.app.goo.gl/ykUDCDSx2PvV84UX9',
    address: 'Thakhek · Khammouane Province',
    statusNote: 'Map link saved · public name to confirm'
  }
];

export const thakhekRestaurants = thakhekMapPlaces.filter((place) => place.category === 'restaurants');
export const thakhekGuesthouses = thakhekMapPlaces.filter((place) => place.category === 'guesthouses');

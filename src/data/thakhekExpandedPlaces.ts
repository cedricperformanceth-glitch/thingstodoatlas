import { resolvePlaceImages } from './placeImageResolver';
import {
  thakhekCafes as existingThakhekCafes,
  thakhekEssentialInformation,
  thakhekGuesthouses as existingThakhekGuesthouses,
  thakhekMarkets,
  thakhekRestaurants as existingThakhekRestaurants,
  thakhekScooterRentals,
  thakhekThingsToDo
} from './thakhekPlaces';
import {
  thakhekCafeAdditions,
  thakhekGuesthouseAdditions,
  thakhekRestaurantAdditions
} from './thakhekListingsExpansion';

export const thakhekGuesthouses = [
  ...existingThakhekGuesthouses,
  ...resolvePlaceImages(thakhekGuesthouseAdditions)
];

export const thakhekRestaurants = [
  ...existingThakhekRestaurants,
  ...resolvePlaceImages(thakhekRestaurantAdditions)
];

export const thakhekCafes = [
  ...existingThakhekCafes,
  ...resolvePlaceImages(thakhekCafeAdditions)
];

export {
  thakhekEssentialInformation,
  thakhekMarkets,
  thakhekScooterRentals,
  thakhekThingsToDo
};

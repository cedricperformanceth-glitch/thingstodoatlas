import { resolvePlaceImages } from './placeImageResolver';
import { vangViengCafes as rawVangViengCafes } from './vangViengCafes';
import { vangViengGuesthouses as rawVangViengGuesthouses } from './vangViengGuesthouses';
import {
  vangViengEssentialInformation as rawVangViengEssentialInformation,
  vangViengMarkets as rawVangViengMarkets
} from './vangViengMarketsEssential';
import {
  vangViengFitness as rawVangViengFitness,
  vangViengScooterRentals as rawVangViengScooterRentals,
  vangViengThingsToDo as rawVangViengThingsToDo
} from './vangViengPractical';

// Restaurants are deliberately not routed through this resolver because their
// images are curated manually in vangViengRestaurants.ts.
export const vangViengCafes = resolvePlaceImages(rawVangViengCafes);
export const vangViengGuesthouses = resolvePlaceImages(rawVangViengGuesthouses);
export const vangViengScooterRentals = resolvePlaceImages(rawVangViengScooterRentals);
export const vangViengThingsToDo = resolvePlaceImages(rawVangViengThingsToDo);
export const vangViengFitness = resolvePlaceImages(rawVangViengFitness);
export const vangViengMarkets = resolvePlaceImages(rawVangViengMarkets);
export const vangViengEssentialInformation = resolvePlaceImages(rawVangViengEssentialInformation);

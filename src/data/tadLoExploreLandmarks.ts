import type { CityLandmark, LandmarkFact } from './laosLandmarks';
import { tadLoExperiences } from './tadLoPlaces';

const requireExperience = (slug: string) => {
  const place = tadLoExperiences.find((item) => item.slug === slug);
  if (!place) throw new Error(`Missing Tad Lo experience: ${slug}`);
  return place;
};

type TadLoLandmarkConfig = {
  slug: string;
  modalId: string;
  fieldCardNumber: string;
  kicker: string;
  duration: string;
  route: string;
  difficulty: string;
  whatToWear: string;
  mapsQuery: string;
  facts?: LandmarkFact[];
};

const toLandmark = (config: TadLoLandmarkConfig): CityLandmark => {
  const place = requireExperience(config.slug);
  const gallery = place.galleryImages?.length
    ? place.galleryImages
    : [{ src: place.image, alt: place.imageAlt }];

  return {
    slug: config.slug,
    modalId: config.modalId,
    name: place.name,
    country: 'Laos',
    fieldCardNumber: config.fieldCardNumber,
    region: place.address || 'Tad Lo · Salavan Province',
    description: `${place.description} ${place.whyWeRecommend}`,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapsQuery)}`,
    gallery,
    facts: config.facts || [
      { label: 'Getting there', value: config.route },
      { label: 'Best time', value: place.hours },
      { label: 'What to wear', value: config.whatToWear },
      { label: 'Price', value: place.price },
      { label: 'Duration', value: config.duration },
      { label: 'Difficulty', value: config.difficulty }
    ],
    cityContext: {
      order: Number(config.fieldCardNumber),
      kicker: config.kicker,
      summary: place.shortDescription,
      duration: config.duration,
      route: config.route
    }
  };
};

export const tadLoExplorePageLandmarks: CityLandmark[] = [
  toLandmark({
    slug: 'tad-hang-waterfall',
    modalId: 'partner-place-tad-hang-waterfall',
    fieldCardNumber: '10',
    kicker: 'WATERFALL · WALKABLE · EASY',
    duration: '1–2 hours',
    route: 'About 700 m from Tad Lo Tourism Office',
    difficulty: 'Easy walking; wet rocks and current become more serious after rain.',
    whatToWear: 'Light clothes, sun protection and shoes or sandals with grip.',
    mapsQuery: 'Tad Hang Waterfall Tad Lo Laos',
    facts: [
      { label: 'Walk from Tad Lo', value: 'Visit Tad Lo places Tad Hang about 700 m by road from the tourism office. It is one of the easiest waterfall stops to reach without a motorbike.' },
      { label: 'Public access', value: 'The public waterfall itself is listed as free. A nearby private access or restaurant-side area may charge separately, so do not confuse a private fee with a waterfall entrance ticket.' },
      { label: 'Swimming', value: 'Lower-flow conditions can make some areas calmer, but swimming depends on the river that day. After heavy rain, stronger current and slippery rocks require local advice.' },
      { label: 'Best rhythm', value: 'Keep roughly one to two hours, or combine the stop naturally with Tad Lo Waterfall, a local meal and a village walk.' },
      { label: 'Season', value: 'Dry season normally means lower flow; rainy season brings more powerful water and stronger currents.' },
      { label: 'Difficulty', value: 'Easy on foot, but the river edge is dynamic. Wear footwear with grip and stay away from the lip of the falls.' }
    ]
  }),
  toLandmark({
    slug: 'tad-lo-waterfall',
    modalId: 'partner-place-tad-lo-waterfall',
    fieldCardNumber: '11',
    kicker: 'WATERFALL · WALKABLE · VILLAGE',
    duration: '2–3 hours',
    route: 'About 1.1 km from Tad Lo Tourism Office',
    difficulty: 'Easy walking, with extra care around wet rocks and changing water levels.',
    whatToWear: 'Light clothes and shoes or sandals with enough grip for wet paths.',
    mapsQuery: 'Tad Lo Waterfall Laos',
    facts: [
      { label: 'Walk from Tad Lo', value: 'Locally checked at about 1.1 km by road from the tourism office and suitable for travellers without personal transport.' },
      { label: 'Public access', value: 'Public waterfall access is free. Any private access or restaurant-side charge should be treated separately and reconfirmed.' },
      { label: 'Water level', value: 'Dry season usually brings lower flow and calmer sections; rainy season can produce stronger currents and different access conditions.' },
      { label: 'Swimming', value: 'Do not assume a pool is safe because it was calm on a previous visit. Check the current river locally before entering.' },
      { label: 'Time', value: 'Two to three hours is a comfortable frame, especially when combined with Tad Hang or a slow village walk.' },
      { label: 'Difficulty', value: 'Easy overall, but wet paths and polished rock require normal waterfall caution.' }
    ]
  }),
  toLandmark({
    slug: 'tad-soung-waterfall',
    modalId: 'partner-place-tad-soung-waterfall',
    fieldCardNumber: '12',
    kicker: 'WATERFALL · ESCARPMENT · HALF DAY',
    duration: 'Half day',
    route: 'About 4 km to the lower falls · trail or road to the top',
    difficulty: 'Moderate, with roughly 80–100 m of ascent on the renovated trail and exposed edges near the upper section.',
    whatToWear: 'Shoes with grip, sun protection and enough water for the return.',
    mapsQuery: 'Tad Soung Waterfall Tad Lo Laos',
    facts: [
      { label: 'Lower access', value: 'Walk roughly 4 km from Tad Lo to the lower falls. The waterfall can be reached without a motorbike.' },
      { label: 'Upper access', value: 'A renovated trail climbs about 80–100 m between lower and upper sections. Alternatively, continue roughly 4 km farther by road to reach the top by vehicle.' },
      { label: 'Flow', value: 'An upstream dam controls the flow, so water volume can change independently of what the weather alone suggests. In dry periods the panorama can remain worthwhile even with little water.' },
      { label: 'Price & parking', value: 'Waterfall access is listed as free. Motorbike parking is normally around 10,000 kip; treat this as a current local reference, not a permanent tariff.' },
      { label: 'Time', value: 'Keep a half day. Walking from Tad Lo makes the rural route itself part of the visit.' },
      { label: 'Safety', value: 'Use extra caution on the climb and near the upper escarpment, particularly after rain. Avoid exposed wet rock at the edge.' }
    ]
  }),
  toLandmark({
    slug: 'katu-weaving-workshop',
    modalId: 'partner-place-katu-weaving-workshop',
    fieldCardNumber: '13',
    kicker: 'WEAVING · KATU · HANDS ON',
    duration: 'Around 4 hours',
    route: 'Walkable in Tad Lo · booking required',
    difficulty: 'Moderate mainly because the floor-seated weaving posture can be uncomfortable for hips, knees or back.',
    whatToWear: 'Comfortable clothes that allow prolonged sitting and easy movement.',
    mapsQuery: 'Katu Weaving Tad Lo Laos',
    facts: [
      { label: 'Workshop length', value: 'Visit Tad Lo currently describes roughly four hours learning posture, technique and the time involved in handmade textiles.' },
      { label: 'Technique context', value: 'Katu women in southern Laos are known for foot-braced backstrap weaving, often including beads in woven cloth. The exact piece and techniques taught in Tad Lo should be confirmed with the host.' },
      { label: 'Booking', value: 'Advance organisation is required. Host group, price, exact meeting point and current contact still need local confirmation.' },
      { label: 'Availability', value: 'Low-season availability can be lower, so do not assume a daily fixed schedule.' },
      { label: 'Physical note', value: 'The traditional seated position and loom tension can be demanding despite the low overall activity level.' },
      { label: 'Respect', value: 'Ask before photographing the host, home or community setting and treat cultural explanations as the host’s perspective rather than a universal statement about every Katu community.' }
    ]
  }),
  toLandmark({
    slug: 'cooking-class-nyay',
    modalId: 'partner-place-cooking-class-nyay',
    fieldCardNumber: '14',
    kicker: 'COOKING · LOCAL · HALF DAY',
    duration: 'Half day',
    route: 'Walkable in Tad Lo · booking required',
    difficulty: 'Easy. The important planning step is sharing allergies and dietary requirements in advance.',
    whatToWear: 'Comfortable everyday clothes suitable for preparing food and sitting down for the shared meal.',
    mapsQuery: 'Nyay cooking class Tad Lo Laos',
    facts: [
      { label: 'Session', value: 'Choose a morning class that finishes with lunch or an afternoon class that finishes with dinner, subject to current arrangement.' },
      { label: 'Current price reference', value: 'Fandee Island currently lists the Lao cooking class at 500,000 kip per person. Reconfirm the price directly when booking.' },
      { label: 'Meal', value: 'The food prepared during the workshop becomes the shared meal at the end of the class.' },
      { label: 'Dietary options', value: 'Vegetarian and non-vegetarian options are available by arrangement. Disclose allergies and dietary restrictions before the session.' },
      { label: 'Access', value: 'Listed as walkable within Tad Lo, but the exact meeting point should be confirmed when booking.' },
      { label: 'Duration', value: 'Plan a half day rather than attaching another timed activity immediately afterward.' }
    ]
  }),
  toLandmark({
    slug: 'fandee-adventure-park',
    modalId: 'partner-place-fandee-adventure-park',
    fieldCardNumber: '15',
    kicker: 'ZIPLINE · FOREST · GUIDED',
    duration: 'Around 2 hours',
    route: 'Walkable at Fandee Island',
    difficulty: 'Moderate; comfort with height and consistent use of the safety system are required.',
    whatToWear: 'Closed or secure shoes and clothes that work comfortably with a harness.',
    mapsQuery: 'Fandee Adventure Park Tad Lo Laos',
    facts: [
      { label: 'Course', value: 'Fandee Island currently lists 13 ziplines and 10 suspended monkey bridges through the forest.' },
      { label: 'Time', value: 'Allow around two hours for the complete guided circuit rather than counting only the zipline time.' },
      { label: 'Current price', value: 'Fandee Island currently publishes 400,000 kip per person. Reconfirm the session and price before starting.' },
      { label: 'Included', value: 'Safety equipment and staff coaching are included according to current local listings.' },
      { label: 'Height requirement', value: 'Visit Tad Lo currently lists a minimum height of 1.60 m. Confirm the operator’s current rule before promising the course to a child or shorter traveller.' },
      { label: 'Safety', value: 'Follow the staff briefing exactly, including clipping order and platform instructions. Weather or wet conditions can change what the operator should run.' }
    ]
  }),
  toLandmark({
    slug: 'mr-hook-coffee-culture',
    modalId: 'partner-place-mr-hook-coffee-culture',
    fieldCardNumber: '16',
    kicker: 'COFFEE · KATOU · PLANTS',
    duration: 'Roughly 3 hours',
    route: 'About 15 km from Tad Lo · motorbike or arranged transport',
    difficulty: 'Easy physically; the experience is built around walking, listening and conversation.',
    whatToWear: 'Light outdoor clothing, sun or rain protection and comfortable walking shoes.',
    mapsQuery: 'Mr Hook Coffee Katu Tad Lo Laos',
    facts: [
      { label: 'Experience', value: 'Spend roughly three hours on coffee, useful plants and Katou cultural perspectives in Mr Hook’s home area. This is a cultural and coffee experience, not an official trek.' },
      { label: 'From Tad Lo', value: 'Locally listed at about 15 km by road from the Tad Lo tourism office. Motorbike, car or minivan is recommended.' },
      { label: 'Recent schedule reference', value: 'A 2025 traveller report recorded sessions at 09:30 and 13:30. Confirm current departure times locally rather than treating them as permanent.' },
      { label: 'Recent price reference', value: 'The same 2025 report recorded 80,000 kip per person. Use that only as orientation and confirm the current contribution or price.' },
      { label: 'Photography', value: 'Ask before photographing people, homes or sacred objects. Do not assume participation in a tour gives blanket permission.' },
      { label: 'Cultural context', value: 'Treat explanations as the host’s account of his community and experience; avoid generalising one village’s practices to all Katou people.' }
    ]
  }),
  toLandmark({
    slug: 'mr-vieng-coffee-experience',
    modalId: 'partner-place-mr-vieng-coffee-experience',
    fieldCardNumber: '17',
    kicker: 'COFFEE · PRODUCER · TREE TO CUP',
    duration: 'About 90 minutes',
    route: 'About 30 km from Tad Lo near Laongam',
    difficulty: 'Easy.',
    whatToWear: 'Normal light outdoor clothing and comfortable shoes for a farm visit.',
    mapsQuery: 'Mr Vieng Coffee Homestay Laongam Laos',
    facts: [
      { label: 'Experience', value: 'A compact producer visit following coffee from the tree through processing and preparation in roughly ninety minutes.' },
      { label: 'From Tad Lo', value: 'Visit Tad Lo places the stop about 30 km by road from the tourism office near Laongam. Motorbike, car or minivan is recommended.' },
      { label: 'Recent price reference', value: 'A December 2024 visitor review reported 130,000 kip per adult for the plantation and cultural explanation. Confirm the current price and booking method.' },
      { label: 'Season', value: 'The farm looks different through the coffee cycle. Bolaven Arabica is commonly harvested around October–January and Robusta around December–February, with variation by microclimate.' },
      { label: 'Time', value: 'The activity itself is short, but the road makes it most logical as part of a day already moving through the Laongam/Bolaven area.' },
      { label: 'Setting', value: 'This is a simple producer and homestay setting rather than a luxury coffee attraction. Treat accommodation, meals and coffee purchases as separate choices from the guided visit.' }
    ]
  }),
  toLandmark({
    slug: 'vat-paa-ancient-forest',
    modalId: 'selection-place-vat-paa-ancient-forest',
    fieldCardNumber: '18',
    kicker: 'FOREST · BUDDHA · QUIET',
    duration: 'Less than 3 hours',
    route: 'Transport useful from Tad Lo',
    difficulty: 'Easy for the surface visit. Do not enter an unassessed cave without a competent guide and proper equipment.',
    whatToWear: 'Light forest clothing, insect protection and shoes with grip for natural ground.',
    mapsQuery: 'Vat Paa Forest Tad Lo Laos',
    facts: [
      { label: 'What it is', value: 'A quiet surface visit among mature forest, a large Buddha and a cave entrance. The forest atmosphere is the main experience.' },
      { label: 'Time', value: 'Keep it under three hours; this works best as a deliberate slow stop rather than a full-day expedition.' },
      { label: 'Price', value: 'Visit Tad Lo currently lists free access information. Reconfirm any local contribution or changed arrangement.' },
      { label: 'Cave', value: 'Do not enter an unlit or unassessed cave without a competent local guide, reliable lighting and suitable equipment.' },
      { label: 'Claims', value: 'Avoid repeating unverified “1,000-year-old tree” or similar age claims as fact unless evidence is available.' },
      { label: 'Difficulty', value: 'Easy for the surface forest and Buddha visit, with normal care on natural ground.' }
    ]
  })
];

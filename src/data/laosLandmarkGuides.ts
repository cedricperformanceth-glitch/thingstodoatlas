export interface LandmarkGuideSection {
  label: string;
  title: string;
  text: string;
  note?: string;
}

export interface LandmarkVisitGuide {
  eyebrow: string;
  intro: string;
  budget: string;
  duration: string;
  bestFor: string;
  sections: LandmarkGuideSection[];
  fieldNote: string;
}

export const laosLandmarkGuides: Record<string, LandmarkVisitGuide> = {
  'bolaven-plateau': {
    eyebrow: 'ROAD NOTE · FROM PAKSE',
    intro: 'The Bolaven Plateau is not one single attraction. It is a road journey through waterfalls, coffee country, villages and cooler highland landscapes. The best experience comes from choosing a rhythm before choosing individual stops.',
    budget: 'Low to moderate',
    duration: '1 day minimum · 2–3 days ideal',
    bestFor: 'Scooter trips, waterfalls and coffee roads',
    sections: [
      {
        label: '01 · ROUTE',
        title: 'How to get there',
        text: 'Begin in Pakse with a reliable scooter, motorbike or private driver. Leave early, check the weather and decide whether you are following the shorter southern route or continuing into a slower multi-day loop. Download the important map points before leaving town because reception can become irregular between stops.',
        note: 'Do not treat the first waterfall as the whole plateau.'
      },
      {
        label: '02 · MONEY',
        title: 'What the budget feels like',
        text: 'The journey itself can stay inexpensive. The main costs are transport, fuel, food, coffee stops and small entrance fees at individual waterfalls. A private driver raises the budget considerably, while a shared room and scooter keep it low. Carry cash in small notes for remote stops.'
      },
      {
        label: '03 · TIME',
        title: 'How long to keep',
        text: 'A full day works for a compact introduction, but it requires an early departure and selective stops. Two or three days are more comfortable if you want to continue toward Tad Lo, sleep on the plateau and avoid riding the final section after dark.'
      },
      {
        label: '04 · ON THE ROAD',
        title: 'How to approach it',
        text: 'Choose fewer waterfalls and leave space for the roads between them. Rain can arrive quickly, paths become slippery and the temperature is often cooler than Pakse. Pack a light rain layer, shoes that can get wet and enough water for the quieter sections.'
      }
    ],
    fieldNote: 'The loop is the experience. Follow the road, not the number of pins.'
  },

  'wat-phou': {
    eyebrow: 'CULTURAL NOTE · FROM PAKSE',
    intro: 'Wat Phou works best as more than a quick temple stop. The old sanctuary, the climb toward the mountain and the slower roads around Champasak form one complete journey south of Pakse.',
    budget: 'Low to moderate',
    duration: 'Half day · full day with Champasak',
    bestFor: 'History, architecture and a slow Mekong day',
    sections: [
      {
        label: '01 · ROUTE',
        title: 'How to get there',
        text: 'Travel south from Pakse toward Champasak by scooter, tuk-tuk or private vehicle. The route is straightforward enough for a day trip, but allow extra time for the riverside roads and local stops rather than planning only the archaeological site. Save the map location before departure.'
      },
      {
        label: '02 · MONEY',
        title: 'What the budget feels like',
        text: 'The visit is usually affordable. Expect transport costs and a paid entrance, plus food or drinks in Champasak. A scooter keeps the day inexpensive; private transport is easier but becomes the main cost. Carry cash and confirm the current entrance price locally.'
      },
      {
        label: '03 · TIME',
        title: 'How long to keep',
        text: 'Keep two to three hours for the museum, lower ruins and climb through the sanctuary. From Pakse, reserve at least half a day. A full day is better when you combine Wat Phou with Champasak town, lunch and the Mekong road without rushing.'
      },
      {
        label: '04 · AT THE SITE',
        title: 'How to approach it',
        text: 'Go early before the stone and exposed terraces become hot. Wear respectful light clothing and stable shoes for the uneven old steps. Carry water, slow down on the climb and look back across the plain as the different levels of the complex reveal themselves.'
      }
    ],
    fieldNote: 'Do not race the stairs. The landscape is part of the temple.'
  },

  'xe-bang-fai-cave': {
    eyebrow: 'EXPEDITION NOTE · KHAMMOUANE',
    intro: 'Xe Bang Fai is a remote river-cave expedition, not a casual roadside attraction. The final roads, local guide, boat journey and changing water conditions all need to be organised before arrival.',
    budget: 'Around 50,000 kip entry · boat extra',
    duration: 'Full day minimum · often multi-day',
    bestFor: 'Remote adventure and guided cave travel',
    sections: [
      {
        label: '01 · ROUTE',
        title: 'The long road from Thakhek',
        text: 'From Thakhek, follow Highway 12 east for about 130 km toward the Vietnamese border. At Nongchan, turn right: the paved road ends here and the dirt road begins. Continue toward Ban Xoang and then Bualapha. Between these villages you reach the Xe Bang Fai River; cross by ferry, with a motorbike crossing reported at around 15,000 kip. Once in Bualapha, continue toward Ban Natoy, then Ban Gnavet and Ban Kouankaphoung. From Ban Natoy onward, the smaller villages and tracks may be easier to follow with an offline map such as Maps.me. At Ban Kouankaphoung the road forks: take the right-hand track and continue to the end of the road for the cave entrance. The final roads are remote and can be rough, so leave enough daylight, arrange a local guide and reconfirm the route, ferry and access conditions before departure.',
        note: 'Route: Thakhek → Highway 12 → Nongchan → Ban Xoang → Xe Bang Fai ferry → Bualapha → Ban Natoy → Ban Gnavet → Ban Kouankaphoung → right-hand track → cave entrance.'
      },
      {
        label: '02 · MONEY',
        title: 'What the expedition costs',
        text: 'Recent visitor reports put the entrance at around 50,000 kip per person, with motorbike parking around 10,000 kip. A small local boat has recently been reported at around 150,000 kip, while larger boats may cost more depending on the group. The boat is the part of the visit worth making room for: once you leave the riverbank and move into the darkness, the scale of Xe Bang Fai really begins to make sense. Prices and boat capacity can change between seasons, so treat these figures as a useful reference and confirm the current rate at the park office when you arrive.'
      },
      {
        label: '03 · TIME',
        title: 'Day trip or overnight?',
        text: 'The cave journey itself may take one to two hours, but the remote approach turns it into a full-day or multi-day plan. Keep margin for road conditions, the walk to the river and local coordination. Do not attach a fixed evening arrival elsewhere to the same day.'
      },
      {
        label: '04 · SAFETY',
        title: 'Let the river and season decide',
        text: 'Confirm river levels and boat access locally. Wear quick-dry clothing and shoes with grip, use the supplied life jacket and carry a strong headlamp. Do not enter the cave or surrounding forest route without a guide.'
      }
    ],
    fieldNote: 'The road is part of the expedition. Confirm the river before leaving.'
  },

  'pha-pa-tou': {
    eyebrow: 'MOUNTAIN NOTE · PAK OU DISTRICT',
    intro: 'Pha Pa Tou — also written Pha Patu or Pha Patou — is a small mountain expedition north of Luang Prabang built around the approach as much as the viewpoint: road transfer, a river crossing, a forest climb, simple local accommodation and the chance to wake above the valleys for sunrise. It is not a fixed urban trail with one official schedule, so the local arrangement matters before the first step.',
    budget: 'Variable · arrange guide, boat, meals and overnight together',
    duration: 'Full day minimum · 2 days / 1 night is the stronger format',
    bestFor: 'Trekking, sunrise, mountain views and a simple local overnight',
    sections: [
      {
        label: '01 · THE APPROACH',
        title: 'The pin is not the trailhead',
        text: 'Do not navigate to Pha Pa Tou as though the Google Maps marker were a normal roadside viewpoint. A documented independent trip from 2020 parked near the elephant-camp area, crossed the river by small boat and then climbed for almost two hours to Pha PaTou Camping-Home Stay. A current Luang Prabang operator uses a longer guided version: roughly one hour by minivan from town, a small-boat crossing, around three hours of jungle walking to a Hmong village and homestay, then another short climb of about twenty-five minutes to the viewpoint. Those descriptions are not necessarily contradictory; they show that different meeting points, accommodation arrangements and trail formats exist. Confirm the exact pickup, river crossing, walking time and sleeping place with the local organiser before leaving Luang Prabang.',
        note: 'Save the organiser and meeting point, not only the mountain pin.'
      },
      {
        label: '02 · THE OVERNIGHT',
        title: 'Sunrise is the reason not to turn the mountain into a rushed day trip',
        text: 'Pha Pa Tou becomes much more coherent when the overnight is treated as part of the visit. The older traveller account describes extremely simple mountaintop accommodation with bedding but no water or electricity, and the group carried its own supplies. Current guided itineraries can include water, meals, transport and a homestay, so do not assume that the old setup or the newer packaged setup is what you will find. Ask exactly what is provided: drinking water, dinner, breakfast, bedding, mosquito protection, charging, toilet facilities and the return boat. Staying overnight gives you sunset without a dark descent, then lets you walk back to the viewpoint before dawn for sunrise rather than starting the entire approach in the middle of the night.',
        note: 'Simple is part of the appeal only when you know what “simple” means before you arrive.'
      },
      {
        label: '03 · THE VIEW',
        title: 'Come for the mountain light, not a guaranteed sea of clouds',
        text: 'Recent local coverage promotes Pha Patu for wide mountain views, sunrise and cloud inversions, but a “sea of clouds” is weather, not a product included with the booking. Clear mornings can open a broad panorama across the Luang Prabang mountain landscape; other mornings may be hazy, overcast or completely inside cloud. The strongest plan is therefore not to chase one viral photograph but to give yourself both evening and morning light. A guided two-day itinerary currently uses the viewpoint for sunset on day one and returns again at dawn on day two. Bring a headlamp for the pre-sunrise walk, a light warm layer for the exposed morning and enough patience to let the weather decide what the ridge reveals.',
        note: 'The overnight gives you two chances at the light. The clouds make no promises.'
      },
      {
        label: '04 · THE TRAIL',
        title: 'Treat it as a local mountain route, not an improvised solo mission',
        text: 'The climb is long enough, remote enough and dependent enough on the river crossing that local coordination is the sensible default. Wear shoes with real grip, carry rain protection, sun protection and a headlamp, and keep drinking water accessible rather than buried at the bottom of the pack. Rain can make forest sections slippery and can also change the river crossing, so reconfirm conditions before departure. Some guided formats pass through or stay near Hmong communities; that makes the human part of the route as important as the panorama. Ask before photographing people, homes or daily work, keep noise low around the homestay and do not treat a village as scenery placed on the way to the viewpoint. If the organiser changes the route because of weather or local conditions, the local decision should outrank an old GPX track or saved blog itinerary.'
      }
    ],
    fieldNote: 'The sunrise begins with the river crossing. Organise the people and the route before chasing the view.'
  }
};

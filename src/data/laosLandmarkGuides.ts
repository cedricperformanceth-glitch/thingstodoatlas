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

  'khone-phapheng-falls': {
    eyebrow: 'MEKONG NOTE · SOUTHBOUND',
    intro: 'Khone Phapheng is a place of scale rather than a long activity list. The value is in seeing and hearing the Mekong break across a vast field of rock near the Cambodian border.',
    budget: 'Moderate from Pakse · lower as an onward stop',
    duration: '1–2 hours at the falls · a long travel day',
    bestFor: 'Mekong landscapes and the road to Si Phan Don',
    sections: [
      {
        label: '01 · ROUTE',
        title: 'How to get there',
        text: 'The falls are far south of Pakse and are better understood as part of the road toward Nakasang and Si Phan Don. Road transport is the practical option. A direct return from Pakse creates a long day, while visiting on the way to the islands makes the route more natural.'
      },
      {
        label: '02 · MONEY',
        title: 'What the budget feels like',
        text: 'The entrance itself is only one part of the cost. From Pakse, transport usually matters more than the visit, especially with a private vehicle. Travellers already moving toward Si Phan Don can keep the budget more reasonable by treating the falls as an onward stop. Confirm the current entrance fee before leaving.'
      },
      {
        label: '03 · TIME',
        title: 'How long to keep',
        text: 'One to two hours is enough for the principal viewpoints without rushing. The road from Pakse changes the calculation: keep most of the day for transport, breaks and the visit. Avoid building a tight onward connection immediately after the falls.'
      },
      {
        label: '04 · AT THE RIVER',
        title: 'How to approach it',
        text: 'Morning or late afternoon is more comfortable for walking between viewpoints. Bring sun protection and water. This is not a swimming stop: the force of the river is the reason to visit, and barriers and warning areas should be respected.'
      }
    ],
    fieldNote: 'Give the river space. This stop is about scale, sound and distance.'
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
    eyebrow: 'MOUNTAIN NOTE · LUANG PRABANG',
    intro: 'Pha Pa Tou combines a river crossing, a forest climb and a simple mountain stay. It rewards travellers who organise the local connection and keep enough time for sunset or sunrise rather than attempting a rushed return.',
    budget: 'Moderate',
    duration: 'Full day · overnight recommended',
    bestFor: 'Hiking, sunrise and simple homestays',
    sections: [
      {
        label: '01 · ROUTE',
        title: 'How to get there',
        text: 'Arrange the local guide or homestay before leaving Luang Prabang. The usual journey continues outside the city, crosses the river by small boat and then climbs through forest for several hours. The exact meeting point matters more than simply saving the mountain pin.'
      },
      {
        label: '02 · MONEY',
        title: 'What the budget feels like',
        text: 'The budget is shaped by transport, boat crossing, guide, meals and any overnight stay. It remains reasonable when arranged locally, but it is not a free independent viewpoint. Confirm what food, bedding and return transport are included and carry cash.'
      },
      {
        label: '03 · TIME',
        title: 'How long to keep',
        text: 'Treat the journey as a full-day hike at minimum. Staying overnight gives the route more meaning and makes sunrise possible without racing the descent. Keep extra daylight for the return crossing and avoid planning the trail in heavy rain.'
      },
      {
        label: '04 · ON THE MOUNTAIN',
        title: 'How to approach it',
        text: 'Wear hiking shoes with grip and carry water, food, light layers and rain protection. Facilities at the top are basic. The climb is steady and the river crossing changes with conditions, so follow local advice rather than treating the route as a fixed urban trail.'
      }
    ],
    fieldNote: 'Sunrise is earned on foot. Organise the crossing before the climb.'
  },

  'kong-lor-cave': {
    eyebrow: 'CAVE NOTE · THAKHEK LOOP',
    intro: 'Kong Lor is both a cave visit and a river journey through the mountain. It fits naturally into the Thakhek Loop or a stay around Ban Khounkham, rather than as a quick detour with no time margin.',
    budget: 'Moderate',
    duration: '2–3 hours at the cave · longer with travel',
    bestFor: 'Boat journeys, caves and the Thakhek Loop',
    sections: [
      {
        label: '01 · ROUTE',
        title: 'How to get there',
        text: 'Reach Kong Lor through Khammouane, commonly as part of the Thakhek Loop or from Ban Khounkham. The road journey is substantial, so sleep nearby or place the cave inside a wider route. Save the destination offline and avoid arriving close to closing time.'
      },
      {
        label: '02 · MONEY',
        title: 'What the budget feels like',
        text: 'Plan for transport, entrance and the local boat arrangement. The visit remains reasonably priced, but the wider road trip, accommodation and fuel create most of the total budget. Confirm the current ticket and boat conditions at the entrance and carry cash.'
      },
      {
        label: '03 · TIME',
        title: 'How long to keep',
        text: 'Allow two to three hours for boarding, the return boat journey and the illuminated formation stop. Travel time should be planned separately. Keep a relaxed schedule in case water levels or local boat availability slow the departure.'
      },
      {
        label: '04 · INSIDE',
        title: 'How to approach it',
        text: 'Wear quick-dry clothes and water-friendly shoes. Keep the life jacket on, protect electronics in a dry bag and use a reliable headlamp. Some sections may require stepping out of the boat in shallow water, and wet surfaces can be slippery.'
      }
    ],
    fieldNote: 'The mountain opens into darkness. Keep time for the return journey.'
  }
};
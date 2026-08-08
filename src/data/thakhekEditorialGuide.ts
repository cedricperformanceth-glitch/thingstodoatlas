import type { EditorialGuideData } from './editorialGuides';

export const thakhekEditorialGuide: EditorialGuideData = {
  slug: 'thakhek-city-notes',
  destination: 'Thakhek',
  typeLabel: 'City notes',
  title: 'Thakhek, before the road turns east',
  subtitle: 'A city field guide to the Mekong, the Thakhek Loop, Khammouane karst and the cave journeys that begin beyond town.',
  intro:
    'Thakhek is more than the place where travellers rent a motorbike. Its Mekong streets hold an older urban story, while the limestone country to the east turns the city into the natural threshold for one of Laos’s most distinctive road journeys.',
  triggerEyebrow: 'Before you explore Thakhek',
  triggerTitle: 'Read the city notes',
  edition: 'Researched edition · August 2026',
  warning:
    'Road surfaces, cave access, river levels and local boat operations change with weather and season. Treat current local information as part of the route, especially for remote caves and long riding days.',
  sections: [
    {
      id: 'town',
      eyebrow: '01 · Read the city',
      title: 'A Mekong town before it became a loop town',
      paragraphs: [
        'Thakhek is the capital of Khammouane Province, facing Nakhon Phanom across the Mekong. The centre still carries French-era villas, shopfronts and administrative buildings, giving the riverfront a different texture from the newer road towns that appear farther east.',
        'The city has been known by several names across earlier Lao history, while the modern town grew through the colonial period and later became the practical base for the loop. That layered history is easy to miss when every conversation begins with motorbikes.'
      ],
      facts: [
        { label: 'Setting', value: 'Mekong river town in Khammouane Province, opposite Nakhon Phanom in Thailand.' },
        { label: 'Urban character', value: 'French-era shopfronts, villas and civic buildings remain visible in the old centre.' },
        { label: 'Border link', value: 'The Third Thai–Lao Friendship Bridge connects the wider Thakhek area with Thailand.' },
        { label: 'Best first move', value: 'Walk the old centre and riverfront before turning the trip into a road itinerary.' }
      ]
    },
    {
      id: 'loop',
      eyebrow: '02 · The classic road chapter',
      title: 'The loop is a journey, not a collection of stops',
      paragraphs: [
        'The Thakhek Loop is commonly ridden over several days through Khammouane and neighbouring landscapes. Recent rider guides consistently describe three to five days as the useful range, with extra time improving the experience rather than weakening it.',
        'The attraction is the sequence: karst walls, reservoirs, caves, villages, open road and changing light. Trying to “complete” the loop as quickly as possible turns the road into a transfer and removes the reason people remember it.'
      ],
      facts: [
        { label: 'Useful pace', value: 'Three to five days suits most complete loop itineraries; longer is possible when adding detours.' },
        { label: 'Route style', value: 'Self-drive road journey with repeated stops, not one continuous sightseeing attraction.' },
        { label: 'Luggage', value: 'Store large bags in Thakhek when possible and carry only what the road needs.' },
        { label: 'Navigation', value: 'Save offline maps and the next night’s accommodation before each stage.' }
      ]
    },
    {
      id: 'karst',
      eyebrow: '03 · The real geography',
      title: 'Limestone explains why Khammouane feels unlike the rest of the route',
      paragraphs: [
        'East of Thakhek, the landscape breaks into towers, cliffs, sinkholes and cave systems. The karst is not background scenery; it determines roads, water, villages and many of the experiences travellers come to Khammouane for.',
        'That geography is why caves that appear close on a map can demand very different levels of commitment. A developed cave beside the main road, an underground river deep into the loop and a remote expedition near Hin Nam No are three different journeys even when all are labelled “cave”.'
      ],
      note: {
        label: 'Field note',
        text: 'Read distance in riding hours, daylight and road surface—not in kilometres alone.'
      }
    },
    {
      id: 'hin-nam-no',
      eyebrow: '04 · World Heritage landscape',
      title: 'Hin Nam No changes the scale of the region',
      paragraphs: [
        'In 2025, UNESCO extended the World Heritage property of Phong Nha-Ke Bang in Vietnam to include Hin Nam No National Park in Laos. The result is a transboundary natural World Heritage property protecting an exceptional limestone and cave landscape across the international border.',
        'For travellers based in Thakhek, that recognition adds context to the remote eastern side of Khammouane. Xe Bang Fai is not simply an isolated cave reached by a difficult road; it belongs to a much larger karst ecosystem whose remoteness is part of what makes the journey significant.'
      ],
      facts: [
        { label: 'UNESCO', value: 'Hin Nam No joined the transboundary World Heritage property in 2025.' },
        { label: 'Landscape', value: 'Major tropical karst system with caves, forest and underground water.' },
        { label: 'Travel meaning', value: 'Remote access should be treated as part of a protected landscape, not an invitation to improvise off-route.' },
        { label: 'Xe Bang Fai', value: 'One of the region’s defining river-cave journeys, requiring local coordination and suitable conditions.' }
      ]
    },
    {
      id: 'caves',
      eyebrow: '05 · Choose the cave',
      title: 'Distance and commitment matter more than fame',
      paragraphs: [
        'Tham Nang Aen is the easiest major cave to combine with a shorter stay around Thakhek. Kong Lor belongs naturally to the classic loop and is defined by its long underground river passage. Xe Bang Fai sits at the expedition end of the spectrum, with rougher access and stronger dependence on local organisation and river conditions.',
        'These experiences should not be stacked into one ranking. Choose according to the route you are already riding, the season, the time available and the type of cave travel you actually want.'
      ],
      facts: [
        { label: 'Tham Nang Aen', value: 'Developed access and the easiest major cave to add close to Thakhek.' },
        { label: 'Kong Lor', value: 'Defining underground-river chapter of the classic loop.' },
        { label: 'Xe Bang Fai', value: 'Remote river-cave expedition requiring more time and local coordination.' },
        { label: 'Decision rule', value: 'Choose one strong cave journey rather than forcing every famous name into the same itinerary.' }
      ]
    },
    {
      id: 'bike',
      eyebrow: '06 · The machine matters',
      title: 'Rent for the road you will actually ride',
      paragraphs: [
        'Recent loop guides agree on one practical point: the motorbike is not a background detail. Tyres, brakes, lights, helmet quality, luggage, breakdown support and your own riding confidence shape the experience as much as the route itself.',
        'Photograph the bike before departure, test it in town and understand what the rental shop expects after damage or a breakdown. A few quiet kilometres near Thakhek are a better place to discover a bad brake or loose mirror than a wet mountain road after dark.'
      ],
      facts: [
        { label: 'Before leaving', value: 'Test brakes, lights, tyres, horn and mirrors before committing to the loop.' },
        { label: 'Helmet', value: 'Choose a usable helmet rather than accepting whatever is handed over.' },
        { label: 'Breakdown', value: 'Ask who to contact, what support exists and who pays for recovery.' },
        { label: 'Insurance', value: 'Confirm that your licence and travel policy cover the vehicle you are riding.' }
      ]
    },
    {
      id: 'season',
      eyebrow: '07 · Rain rewrites the loop',
      title: 'The same road becomes a different trip after a storm',
      paragraphs: [
        'Wet-season Khammouane can be spectacular, but rain changes grip, visibility, cave water, track conditions and the speed of every stage. Rider accounts repeatedly describe muddy detours and roads that feel completely different from their dry-season versions.',
        'Leave early, ask about the road ahead and shorten the plan when the weather demands it. A fixed accommodation booking is never a good reason to force a dangerous final hour in darkness or heavy rain.'
      ],
      facts: [
        { label: 'Rain', value: 'Expect slower riding, poorer grip and more variable unsealed sections.' },
        { label: 'Cave water', value: 'River caves and boat routes can change or close when water levels become unsafe.' },
        { label: 'Daylight', value: 'Begin long stages early and avoid making darkness part of the plan.' },
        { label: 'Flexibility', value: 'Keep at least one stage that can be shortened, delayed or removed.' }
      ]
    },
    {
      id: 'pace',
      eyebrow: '08 · Before and after the loop',
      title: 'Keep a Thakhek night on both sides of the journey',
      paragraphs: [
        'A first night gives time to inspect the bike, understand the route and see the old centre. A final night creates room for laundry, food, mechanical delays and recovery before an onward bus or border crossing.',
        'That rhythm also restores Thakhek’s role as a city. The loop may be the headline, but the contrast between slow Mekong streets and days of limestone road is what gives the complete chapter its shape.'
      ],
      facts: [
        { label: 'Before', value: 'One night for the old centre, rental checks and route planning.' },
        { label: 'During', value: 'Count loop nights separately from the city stay.' },
        { label: 'After', value: 'One recovery night is valuable before an important onward connection.' },
        { label: 'Short visit', value: 'Without the loop, two nights still allow the town and one closer cave journey.' }
      ],
      note: {
        label: 'Atlas note',
        text: 'Thakhek is the pause before the limestone road—and the place where the road becomes a memory afterward.'
      }
    }
  ],
  links: [
    { label: 'Wikipedia · Thakhek background and history', href: 'https://en.wikipedia.org/wiki/Thakhek' },
    { label: 'UNESCO · Laos World Heritage properties', href: 'https://whc.unesco.org/en/statesparties/la/' },
    { label: 'Laos Insider · extended Thakhek Loop guide', href: 'https://laosinsider.com/laos-travel-guide/thakhek-loop/' },
    { label: 'Backpack Moments · Thakhek Loop guide', href: 'https://backpackmoments.com/thakhek-loop/' },
    { label: 'The Bold Passport · Thakhek Loop route notes', href: 'https://theboldpassport.com/ultimate-thakhek-loop-guide-2025/' }
  ]
};

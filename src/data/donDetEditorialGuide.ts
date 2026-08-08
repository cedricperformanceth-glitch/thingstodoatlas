import type { EditorialGuideData } from './editorialGuides';

export const donDetEditorialGuide: EditorialGuideData = {
  slug: 'don-det-island-notes',
  destination: 'Don Det',
  typeLabel: 'Island notes',
  title: 'Don Det, where the itinerary slows down',
  subtitle: 'An island field guide to Si Phan Don, the old railway, Don Khon, Mekong travel and the slower logic of Southern Laos.',
  intro:
    'Don Det belongs to Si Phan Don—the “Four Thousand Islands” stretch of the Mekong where channels, sandbanks and inhabited islands reshape the river. The island makes more sense as a base inside that landscape than as a tiny destination to complete in a day.',
  triggerEyebrow: 'Before you explore Don Det',
  triggerTitle: 'Read the island notes',
  edition: 'Researched edition · August 2026',
  warning:
    'Boat times, river conditions, border procedures and island services can change. Confirm anything attached to a fixed departure, the Cambodia crossing or water safety before relying on it.',
  sections: [
    {
      id: 'archipelago',
      eyebrow: '01 · Read the islands',
      title: 'Si Phan Don is a river system, not four thousand identical islands',
      paragraphs: [
        'Si Phan Don is a broad riverine landscape in Champasak where the Mekong divides around islands, islets, seasonal sandbars and channels before reaching the major falls farther south. Don Det is one of the best-known traveller bases, but it is only one part of that system.',
        'The useful shift is to stop treating Don Det as the attraction itself. The island provides beds, food, bicycles and boats; the larger experience comes from the relationship between Don Det, Don Khon, the Mekong channels and the waterfalls that historically made this stretch of river difficult to navigate.'
      ],
      facts: [
        { label: 'Region', value: 'Si Phan Don · Southern Mekong · Champasak Province.' },
        { label: 'Main islands', value: 'Don Det and Don Khon form the easiest shared traveller chapter; Don Khong is much larger farther north.' },
        { label: 'Landscape', value: 'Channels, rice fields, riverbanks, waterfalls and seasonal changes in the Mekong.' },
        { label: 'Best frame', value: 'Use Don Det as a base for the wider island and river landscape.' }
      ]
    },
    {
      id: 'railway',
      eyebrow: '02 · A railway built around a waterfall',
      title: 'The old railway explains why Don Det and Don Khon are linked',
      paragraphs: [
        'During the French colonial period, a narrow-gauge railway connected Don Det and Don Khon. It was built to move goods and boats around the impassable Khone Falls section of the Mekong rather than through it.',
        'The remains of that infrastructure—especially the bridge between the islands and traces of the old line—give the landscape a historical logic. What now feels like an easy bicycle crossing once belonged to an ambitious transport solution for a river that refused to become a simple navigation route.'
      ],
      facts: [
        { label: 'Purpose', value: 'The railway bypassed the dangerous Khone Falls section of the Mekong.' },
        { label: 'Connection', value: 'It linked Don Det and Don Khon during the French colonial period.' },
        { label: 'Today', value: 'The bridge and railway traces remain part of the island cycling landscape.' },
        { label: 'Why it matters', value: 'The transport history makes the waterfalls part of the island story rather than a separate attraction.' }
      ]
    },
    {
      id: 'don-khon',
      eyebrow: '03 · One bicycle chapter',
      title: 'Don Det and Don Khon work better together than apart',
      paragraphs: [
        'A bicycle is the natural way to connect the two islands. Don Det supplies the social base and easy accommodation; Don Khon opens quieter village roads, old railway traces and access toward Li Phi–Somphamit and other river landscapes.',
        'Recent island guides consistently treat the crossing as a full-day rhythm rather than a race. Ride early, stop when the landscape changes, leave time for food and return before darkness turns simple rural tracks into a navigation problem.'
      ],
      facts: [
        { label: 'Best transport', value: 'Bicycle for a complete Don Det–Don Khon day; walking for shorter village sections.' },
        { label: 'Road surface', value: 'Expect dust in dry weather and mud or standing water after heavy rain.' },
        { label: 'Bike check', value: 'Test brakes, tyres, chain and seat before leaving the rental shop.' },
        { label: 'Light', value: 'Carry a torch or bike light even when you intend to return before dark.' }
      ]
    },
    {
      id: 'where-to-stay',
      eyebrow: '04 · Choosing your side',
      title: 'Sunrise, sunset and distance from the pier shape the stay',
      paragraphs: [
        'The northern arrival area is practical for boats, food, tickets and a short stay. Farther around the island, the atmosphere becomes quieter. The sunrise and sunset sides offer different light and social rhythms, while the southern end shortens the ride toward Don Khon.',
        'This is one of those places where location matters more than room polish. A simple bungalow with the right river edge, hammock and distance from the busiest bars may fit the trip better than a more finished room in the wrong part of the island.'
      ],
      note: {
        label: 'Island note',
        text: 'Choose the side of the island for the evening you want, not only for the room photo.'
      }
    },
    {
      id: 'mekong',
      eyebrow: '05 · The river decides',
      title: 'The Mekong is scenery, transport and the main safety decision',
      paragraphs: [
        'Boats, kayaking and river-edge swimming make the Mekong central to the Don Det experience. The same river also carries strong current, changing depth and debris, particularly when seasonal water rises.',
        'Use a life jacket for organised water activities, protect documents and electronics, and ask how current conditions alter the planned route. Calm-looking water beside an island does not automatically mean safe swimming, and the major rapids and falls farther south are not casual bathing areas.'
      ],
      facts: [
        { label: 'Boat', value: 'Local boats are part of arrival, departure and many island excursions.' },
        { label: 'Water level', value: 'Season and recent rain change current, beaches, routes and river access.' },
        { label: 'Life jacket', value: 'Use one for kayaking and organised boat activities.' },
        { label: 'Alcohol', value: 'Keep heavy drinking separate from swimming, kayaking and late boat travel.' }
      ]
    },
    {
      id: 'falls',
      eyebrow: '06 · Where the Mekong breaks',
      title: 'The waterfalls deserve separate routes, not one overloaded day',
      paragraphs: [
        'Li Phi–Somphamit fits naturally into a Don Khon bicycle day. Khone Phapheng, the largest fall complex in the area, sits on a different route and usually requires a mainland transfer or organised excursion.',
        'Treating every waterfall as one checklist weakens the geography. One belongs to the island rhythm; the other reveals the scale of the Mekong as it drops and divides before Cambodia. Choose the route that fits the day rather than forcing both into one timetable.'
      ],
      facts: [
        { label: 'Li Phi', value: 'Fits naturally with Don Khon by bicycle or local transport.' },
        { label: 'Khone Phapheng', value: 'A larger mainland excursion south of the island gateway.' },
        { label: 'Nakasang', value: 'The practical mainland gateway for Don Det and many onward transfers.' },
        { label: 'Planning rule', value: 'Give one strong direction to the day instead of stacking every famous waterfall.' }
      ]
    },
    {
      id: 'practical',
      eyebrow: '07 · Island limits',
      title: 'Bring cash, save the boat details and respect the final connection',
      paragraphs: [
        'Don Det has plenty of traveller services, but it remains an island with more limited banking, healthcare and transport backup than Pakse. Arrive with enough kip for accommodation, meals, tickets and an unexpected private transfer rather than depending on one payment method.',
        'For onward travel toward Cambodia or back north, confirm the complete sequence—boat, road vehicle, border procedure and operator—before departure. A ticket sold as one journey can still involve several handovers, so avoid attaching a tight international connection to the same day.'
      ],
      facts: [
        { label: 'Cash', value: 'Withdraw before the islands and keep smaller kip notes for boats, food and local services.' },
        { label: 'Medical', value: 'Local care is basic; significant illness or injury may require mainland or Pakse treatment.' },
        { label: 'Offline', value: 'Keep guesthouse, ticket and operator details available without data.' },
        { label: 'Border day', value: 'Treat Cambodia as a transfer day and reconfirm current visa and crossing rules.' }
      ]
    },
    {
      id: 'pace',
      eyebrow: '08 · Let the island work',
      title: 'Stay until Don Det stops feeling like transit',
      paragraphs: [
        'One night mostly proves that you arrived. Two nights allow a Don Khon day. Three or four nights make room for another river journey, a slower island loop, weather changes and the unplanned time that gives Si Phan Don its reputation for slowing travellers down.',
        'That does not mean doing nothing by rule. It means giving the island enough space that one sunset, a bicycle road or a long breakfast does not feel like time stolen from an itinerary.'
      ],
      facts: [
        { label: 'Quick stay', value: 'Two nights for Don Det plus one Don Khon bicycle day.' },
        { label: 'Balanced stay', value: 'Three to four nights for islands, river and genuine downtime.' },
        { label: 'Extra night', value: 'Useful when rain, boats or an onward border transfer could shift the plan.' },
        { label: 'Departure', value: 'Reconfirm the first boat and onward vehicle the evening before leaving.' }
      ],
      note: {
        label: 'Atlas note',
        text: 'The island starts working when you stop measuring every afternoon by how many places you visited.'
      }
    }
  ],
  links: [
    { label: 'Wikipedia · Si Phan Don geography and railway history', href: 'https://en.wikipedia.org/wiki/Si_Phan_Don' },
    { label: 'Backpack Adventures · Don Det and the 4000 Islands', href: 'https://www.backpackadventures.org/don-det-laos/' },
    { label: 'Never Ending Footsteps · Don Det travel guide', href: 'https://www.neverendingfootsteps.com/don-det-laos-travel-guide/' },
    { label: 'The Common Wanderer · Don Det and Si Phan Don guide', href: 'https://www.thecommonwanderer.com/blog/don-det-laos-travel-guide' },
    { label: 'Official Champasak tourism information', href: 'https://www.tourismlaos.org/southern-provinces/champasak-province/' }
  ]
};

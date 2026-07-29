export type AtlasEntryStatus = 'open' | 'planned';

export interface AtlasCity {
  slug: string;
  name: string;
  route: string;
  status: AtlasEntryStatus;
  tripEnabled: boolean;
}

export interface AtlasCountry {
  slug: string;
  name: string;
  chapter: string;
  route: string;
  status: AtlasEntryStatus;
  cities: AtlasCity[];
}

export const atlasCountries: AtlasCountry[] = [
  {
    slug: 'thailand',
    name: 'Thailand',
    chapter: '01',
    route: '/thailand',
    status: 'open',
    cities: []
  },
  {
    slug: 'laos',
    name: 'Laos',
    chapter: '02',
    route: '/laos',
    status: 'open',
    cities: [
      { slug: 'pakse', name: 'Pakse', route: '/laos/pakse', status: 'open', tripEnabled: true },
      { slug: 'tad-lo', name: 'Tad Lo', route: '/laos/tad-lo', status: 'open', tripEnabled: true },
      { slug: 'vientiane', name: 'Vientiane', route: '/laos/vientiane', status: 'planned', tripEnabled: false },
      { slug: 'don-det', name: 'Don Det', route: '/laos/don-det', status: 'planned', tripEnabled: false },
      { slug: 'luang-prabang', name: 'Luang Prabang', route: '/laos/luang-prabang', status: 'planned', tripEnabled: false }
    ]
  },
  {
    slug: 'sri-lanka',
    name: 'Sri Lanka',
    chapter: '03',
    route: '/sri-lanka',
    status: 'open',
    cities: [
      { slug: 'negombo', name: 'Negombo', route: '/sri-lanka/negombo', status: 'open', tripEnabled: true },
      { slug: 'colombo', name: 'Colombo', route: '/sri-lanka/colombo', status: 'open', tripEnabled: true },
      { slug: 'ahangama', name: 'Ahangama', route: '/sri-lanka/ahangama', status: 'open', tripEnabled: true },
      { slug: 'mirissa', name: 'Mirissa', route: '/sri-lanka/mirissa', status: 'open', tripEnabled: true }
    ]
  }
];

export const countryNavigation = atlasCountries.map((country) => ({
  name: country.name,
  href: country.route,
  slug: country.slug,
  number: country.chapter,
  status: country.status
}));

export const tripCountryConfig = Object.fromEntries(
  atlasCountries.map((country) => [
    country.slug,
    {
      name: country.name,
      route: country.route,
      cities: country.cities
        .filter((city) => city.tripEnabled && city.status === 'open')
        .map(({ slug, name, route }) => ({ slug, name, route }))
    }
  ])
);

export const getCountry = (slug: string) => atlasCountries.find((country) => country.slug === slug);

export const getCountryFromPath = (pathname: string) => {
  const segment = pathname.split('/').filter(Boolean)[0] || '';
  return getCountry(segment);
};

export const getCity = (countrySlug: string, citySlug: string) =>
  getCountry(countrySlug)?.cities.find((city) => city.slug === citySlug);

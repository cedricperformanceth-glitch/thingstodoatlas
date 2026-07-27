# Pakse restaurant image research — July 2026

This report records the complete public-web image research pass for the 18 restaurants currently listed in the Pakse guide.

## Editorial rule

A public listing is enough to confirm that a venue exists, but it is not automatically proof that its photos may be copied or hotlinked. Images are therefore separated into three levels:

- **Approved** — already selected in the project, or supplied directly by the site owner.
- **Needs review** — the restaurant and public image source are identifiable, but ownership, reuse rights or the exact photo match still require a manual check.
- **No reliable source** — no sufficiently precise independent public image source was found under the current restaurant name.

## Results

| # | Restaurant | Status | Best source found | Editorial note |
|---:|---|---|---|---|
| 1 | La Boulange “Garden” | Approved | User-supplied local file | Keep the supplied image. It is the safest and most reliable source. |
| 2 | Laotian BBQ All Day | Needs review | Restaurant Guru Pakse listings | The venue is identifiable and appears with a public image, but no official page or reusable original was found. |
| 3 | Road 46 Noodle Soup | No reliable source | No exact independent match | “Road 46” is too generic to safely associate a web image with this exact listing. Keep the fallback until a Maps or owner photo is supplied. |
| 4 | Fad Tivo Sin Dat Buffet | Needs review | Google local listing under the Lao name `ຮ້ານແຟັດທີໂວ ບຸບເຟຊີ້ນດາດ` | The venue is identifiable, but no official reusable image source was found. |
| 5 | Champa Hom Restaurant | Needs review | https://wanderlog.com/place/details/12942088/champa-hom-restaurant | Strong match with multiple recent independent references and public photos. No official source or clear reuse permission was found. |
| 6 | Kra Mou Phonsay | Needs review | https://www.top-rated.online/countries/Laos/cities/Phonekhoung/%40restaurant/top-rated | Exact venue match near Pakse. The available imagery is third-party listing content. |
| 7 | Sabaidee Pakse Restaurant | Approved | https://wanderlog.com/place/details/2683332/sabaidee-pakse-restaurant | Existing selected image retained. An official Facebook listing also exists, but the currently selected source remains documented. |
| 8 | ITALAO Restaurant Pakse | No reliable source | No exact independent public match | The Maps address may still be valid, but the name does not produce a precise public image source. Keep the fallback. |
| 9 | 90s Vintage Restaurant & Beer Garden | Needs review | Google local listing and Restaurant Guru Pakse listings | Exact venue confirmed, with public images and multiple listings. No official page or reusable original was identified. |
| 10 | Samlee’s Garden Restaurant | Approved | Wanderlog listing; official Facebook/site also identified | Existing selected image retained. Prefer an owner-approved image later for long-term stability. |
| 11 | Dok Mai Lao Trattoria | Approved | https://www.facebook.com/Dokmailaorestaurant/ | Existing selected image retained; official venue page identified. |
| 12 | Uncle Eddie’s Idaho Burgers | Needs review | https://www.top-rated.online/countries/Laos/cities/Phonsikhai%2BHome/%40restaurant/top-rated | Exact Pakse-area listing found as “Uncle Eddie’s burgers”. No official image source was identified. |
| 13 | Balance Café & Beer — Pakse Branch | Approved | https://wanderlog.com/place/details/5671008/balance-caf%C3%A9--beer-pakse-branch | Existing selected image retained. |
| 14 | Mojo & Ping Moo Zap | No reliable source | No exact independent match | The combined name is not reliably searchable. A direct Maps photo or owner page is needed before replacing the fallback. |
| 15 | SéSé Wine and Beer | Approved | https://wanderlog.com/place/details/1608044/s%C3%A9s%C3%A9-wine-and-beer | Existing selected image retained. |
| 16 | La Terrasse | Approved | https://wanderlog.com/place/details/2683324/la-terrasse | Existing selected image retained. |
| 17 | Meiling Restaurant | Approved | https://wanderlog.com/place/details/4339103/meiling-restaurant | Existing selected image retained. |
| 18 | Jasmine Restaurant, Guesthouse & Hostel | Approved | https://wanderlog.com/place/details/2683308/jasmine-restaurant-guesthouse--hostel | Existing selected image retained. |

## Summary

- **9 approved images** already available in the project.
- **6 venues confirmed but images require manual review** before publication.
- **3 venues have no sufficiently precise independent image source** under their current names.

## Recommended production workflow

1. Keep all nine approved images currently selected by `src/data/place-images.generated.json`.
2. Do not auto-approve Facebook, Google, Restaurant Guru or Top-Rated images only because they are publicly visible.
3. For the six review cases, prioritise an official website/social page, direct owner permission, or a photo supplied by the site owner.
4. For the three unresolved names, use the saved Google Maps links to capture the exact Lao name and request or supply a venue-specific image.
5. Download and optimise final approved files into the repository instead of permanently hotlinking third-party CDNs.

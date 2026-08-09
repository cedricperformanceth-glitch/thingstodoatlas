import placeImageResults from './place-images.generated.json';

export type ImageResult = {
  slug?: string;
  selectedImage?: string | null;
  status?: string;
  sourcePage?: string | null;
  sourceName?: string | null;
  sourceType?: string;
  imageSourceUrl?: string | null;
  imageSourceType?: string;
  imageAuthor?: string | null;
  imageLicense?: string | null;
  imageIsGeneric?: boolean;
};

type ImageablePlace = {
  slug: string;
  image: string;
  imageSourceUrl?: string | null;
  imageSourceType?: string;
  imageAuthor?: string | null;
  imageLicense?: string | null;
  imageIsGeneric?: boolean;
};

const isLocalImage = (image: string) => image.startsWith('/images/places/');
const isApproved = (result?: ImageResult): result is ImageResult & { slug: string; selectedImage: string } =>
  Boolean(result?.slug && result.selectedImage && result.status === 'approved');

const priority = (result: ImageResult) => {
  const image = result.selectedImage!;
  const source = result.imageSourceType ?? result.sourceType ?? '';

  // Manual/local editorial choices always outrank generated candidates.
  if (source === 'user-supplied' && isLocalImage(image)) return 600;
  if (isLocalImage(image)) return 500;
  if (result.imageIsGeneric === false) return 400;
  if (source === 'official-site') return 300;
  if (source === 'public-directory' || source === 'directory') return 200;
  return 100;
};

const candidateModules = import.meta.glob('./*-image-candidates.json', {
  eager: true,
  import: 'default'
}) as Record<string, ImageResult[]>;

const candidateSources: readonly ImageResult[][] = [
  placeImageResults as ImageResult[],
  ...Object.values(candidateModules)
];

const imageBySlug = new Map<string, ImageResult>();
for (const source of candidateSources) {
  for (const candidate of source) {
    if (!isApproved(candidate)) continue;
    const current = imageBySlug.get(candidate.slug);
    // Curated category files are loaded after the generated registry. At equal
    // quality, the later editorial selection must replace an older generated URL.
    if (!current || priority(candidate) >= priority(current)) imageBySlug.set(candidate.slug, candidate);
  }
}

/**
 * Return only an authored/exact image strong enough to lead a card or field guide.
 * Generic discovery fallbacks are deliberately excluded so an automated search can
 * never become the hero image merely because no better result was found.
 */
export const getProtectedPlaceImage = (slug: string): ImageResult | undefined => {
  const candidate = imageBySlug.get(slug);
  if (!candidate?.selectedImage) return undefined;

  const source = candidate.imageSourceType ?? candidate.sourceType ?? '';
  if (source === 'user-supplied') return candidate;
  if (isLocalImage(candidate.selectedImage)) return candidate;
  if (candidate.imageIsGeneric === false) return candidate;
  return undefined;
};

export const resolvePlaceImage = <T extends ImageablePlace>(place: T): T => {
  const candidate = imageBySlug.get(place.slug);
  if (!candidate?.selectedImage) return place;

  // Keep this user-supplied Tad Lo photo set isolated from the shared resolver.
  // All other places retain their existing candidate-resolution behaviour.
  if (place.image.startsWith('/images/tad-lo/')) return place;

  // A generic candidate cannot displace a local or exact image already
  // declared in atlas.ts. This preserves the authored fallback as required.
  if (candidate.imageIsGeneric && (isLocalImage(place.image) || place.imageIsGeneric === false)) return place;

  return {
    ...place,
    image: candidate.selectedImage,
    imageSourceUrl: candidate.imageSourceUrl ?? candidate.selectedImage,
    imageSourceType: candidate.imageSourceType ?? candidate.sourceType,
    imageAuthor: candidate.imageAuthor ?? null,
    imageLicense: candidate.imageLicense ?? null,
    imageIsGeneric: Boolean(candidate.imageIsGeneric)
  };
};

export const resolvePlaceImages = <T extends ImageablePlace>(places: readonly T[]): T[] =>
  places.map(resolvePlaceImage);

import placeImageResults from './place-images.generated.json';
import accommodationImageCandidates from './accommodation-image-candidates.json';
import gymImageCandidates from './gym-image-candidates.json';
import marketImageCandidates from './markets-shopping-image-candidates.json';
import essentialImageCandidates from './essential-information-image-candidates.json';

export type ImageResult = {
  slug?: string;
  selectedImage?: string | null;
  status?: string;
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

const quality = (result?: ImageResult) => {
  if (!result || result.status !== 'approved' || !result.selectedImage) return 0;
  const source = result.imageSourceType || result.sourceType;
  if (source === 'user-supplied') return 100;
  if (result.imageIsGeneric === false) return 80;
  if (source === 'official-site') return 70;
  return 50;
};

const sources: ImageResult[][] = [
  placeImageResults as ImageResult[],
  accommodationImageCandidates as ImageResult[],
  gymImageCandidates as ImageResult[],
  marketImageCandidates as ImageResult[],
  essentialImageCandidates as ImageResult[]
];

const imageBySlug = new Map<string, ImageResult>();
for (const source of sources) {
  for (const result of source) {
    if (!result?.slug || quality(result) === 0) continue;
    const current = imageBySlug.get(result.slug);
    if (!current || quality(result) >= quality(current)) imageBySlug.set(result.slug, result);
  }
}

export const placeImageOverrides = [...imageBySlug.values()].filter(
  (result): result is ImageResult & { slug: string; selectedImage: string } => Boolean(result.slug && result.selectedImage)
);

export const resolvePlaceImage = <T extends ImageablePlace>(place: T): T => {
  const result = imageBySlug.get(place.slug);
  if (!result || result.status !== 'approved' || !result.selectedImage) return place;
  return {
    ...place,
    image: result.selectedImage,
    imageSourceUrl: result.imageSourceUrl ?? result.selectedImage,
    imageSourceType: result.imageSourceType ?? result.sourceType,
    imageAuthor: result.imageAuthor ?? null,
    imageLicense: result.imageLicense ?? null,
    imageIsGeneric: Boolean(result.imageIsGeneric)
  };
};

export const resolvePlaceImages = <T extends ImageablePlace>(places: T[]): T[] => places.map(resolvePlaceImage);

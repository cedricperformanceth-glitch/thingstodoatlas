export type LandmarkPageQuestion = {
  question: string;
  answer: string;
};

export type LandmarkPagePresentation = {
  layoutVariant?: 'expedition';
  aliases?: string;
  finalHeading?: string;
  faqIntro?: string;
  faq?: LandmarkPageQuestion[];
  seo?: {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
  };
};

const presentationBySlug: Record<string, LandmarkPagePresentation> = {
  'xe-bang-fai-cave': {
    layoutVariant: 'expedition',
    aliases: 'Hin Nam No · Khammouane · Remote river cave',
    finalHeading: 'Inside Hin Nam No, beyond the photograph',
    faqIntro: 'The questions that matter when the road, river and local coordination shape the visit.',
    faq: [
      {
        question: 'Can Xe Bang Fai Cave be visited as a day trip from Thakhek?',
        answer: 'Yes, but it should be the centre of the day rather than one more stop. The boat visit itself is relatively short; the remote road, river crossing and local coordination are what make the schedule demanding.'
      },
      {
        question: 'Can you visit Xe Bang Fai Cave during the rainy season?',
        answer: 'Hin Nam No advises against entering the river cave from June to October, when flows can become dangerous. Road access can also deteriorate quickly after heavy rain, so reconfirm river and road conditions locally before leaving Thakhek.'
      },
      {
        question: 'Do you need a guide for Xe Bang Fai Cave?',
        answer: 'Yes. The cave visit is guided, and local coordination matters for the boat, river conditions and the remote approach. Do not enter the cave or surrounding forest route independently.'
      },
      {
        question: 'Where can you stay near Xe Bang Fai Cave?',
        answer: 'Ban Nong Ping has homestays, a village lodge and simple bungalows close to the river. Staying nearby removes the pressure of making the long return journey immediately after the cave.'
      },
      {
        question: 'How long is the Xe Bang Fai Cave boat trip?',
        answer: 'The standard local boat visit is about ninety minutes. The complete trip needs much more time because the road from Thakhek, river crossing and final access turn Xe Bang Fai into a full-day or overnight journey.'
      }
    ],
    seo: {
      title: 'Xe Bang Fai Cave, Laos: Guide from Thakhek',
      description: 'Plan a visit to Xe Bang Fai Cave in Laos from Thakhek: route, dry-season access, local boat guide, current costs, overnight options and practical field notes.',
      image: 'https://whc.unesco.org/uploads/thumbs/site_0951_0031-1000-667-20250617115722.jpg',
      imageAlt: 'Lower entrance of Xe Bang Fai Cave in Hin Nam No National Park, Laos'
    }
  }
};

export const getLandmarkPagePresentation = (slug: string): LandmarkPagePresentation =>
  presentationBySlug[slug] || {};

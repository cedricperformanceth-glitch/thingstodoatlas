export type AnnotationFamily = 'navigation' | 'terrain' | 'transport';
export type AnnotationStyle = 'refined-script' | 'casual-field-note' | 'small-uppercase-note' | 'connector';
export type AnnotationSize = 'small' | 'medium' | 'large';

export type MicroAnnotationDefinition = {
  id: string;
  family: AnnotationFamily;
  file: string;
  label?: string;
  style: AnnotationStyle;
  defaultSize: AnnotationSize;
  decorative: boolean;
  group: 'text' | 'connector';
};

export const microAnnotations: MicroAnnotationDefinition[] = [
  {
    id: 'field-notes-stamp',
    family: 'navigation',
    file: 'field-notes-stamp.svg',
    label: 'Field notes stamp',
    style: 'small-uppercase-note',
    defaultSize: 'medium',
    decorative: true,
    group: 'text'
  },
  {
    id: 'keep-this-feeling',
    family: 'navigation',
    file: 'keep-this-feeling.svg',
    label: 'Keep this feeling',
    style: 'casual-field-note',
    defaultSize: 'medium',
    decorative: true,
    group: 'text'
  },
  {
    id: 'notebook-compass',
    family: 'terrain',
    file: 'notebook-compass.svg',
    label: 'Notebook compass',
    style: 'connector',
    defaultSize: 'small',
    decorative: true,
    group: 'connector'
  }
];

export const navigationAnnotations = microAnnotations.filter((annotation) => annotation.family === 'navigation');

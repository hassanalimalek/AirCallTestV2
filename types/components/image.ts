import { BoxProperties } from '../css';

type ImageKind = 'avatar' | 'fluid' | 'raised';

type ImageElProps = JSX.IntrinsicElements['img'];

interface ImageBase
  extends BoxProperties,
    Omit<ImageElProps, 'height' | 'width' | 'alt'> {
  kind?: ImageKind;
  objectFit?: 'cover' | 'contain';
  placeholder?: string;
  alt: string;
}

export type ImageProps = ImageBase;

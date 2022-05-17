import { BoxProperties } from '../../types';
import { Ref } from 'react';

type SpanElProps = JSX.IntrinsicElements['span'];

export interface TextProps extends BoxProperties, SpanElProps {
  ref?: Ref<HTMLSpanElement>;
  overflow?: string;
}

export interface DropdownLabelTextProps extends TextProps {
  isDropdownOpened?: boolean;
}

// export type ClickableTextProps = MakeRequired<TextProps, 'aria-label'>;

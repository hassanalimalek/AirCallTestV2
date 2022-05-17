import { TextProps } from '../../../types';
import { forwardRef } from 'react';

import { StyledText } from './elements';

export const Text: React.FC<TextProps> = forwardRef<HTMLSpanElement, TextProps>(
  (props, ref) => <StyledText ref={ref} {...props} />
);

import { InputProps } from '../../../types';
import { forwardRef } from 'react';

import { StyledInput } from './elements';

export const Input = forwardRef<HTMLInputElement, InputProps>((props) => (
  <StyledInput {...props} ref={null} />
));

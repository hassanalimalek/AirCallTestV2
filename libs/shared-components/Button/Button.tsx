import { ButtonProps } from '../../../types';
import { forwardRef } from 'react';

import { StyledButton } from './elements';

export const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ fluid, ...props }, ref) => (
  <StyledButton {...props} block={fluid} ref={ref} />
));

import { Any, SelectProps } from '../../../types';

import { StyledSelect } from './elements';

export const Select: React.FC<SelectProps<Any>> = (props) => (
  <StyledSelect {...props} />
);

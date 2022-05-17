import { OptionProps } from '../../../types';

import { StyledOption } from './elements';

export const Option: React.FC<OptionProps> = (props) => (
  <StyledOption {...props} />
);

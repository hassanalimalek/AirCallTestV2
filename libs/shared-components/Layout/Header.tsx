import { LayoutProps } from '../../../types';

import { StyledHeader } from './elements';

export const Header: React.FC<LayoutProps> = (props) => (
  <StyledHeader {...props} />
);

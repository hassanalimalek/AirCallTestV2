import { PaginationProps } from '../../../types';

import { StyledPagination } from './elements';

export const Pagination: React.FC<PaginationProps> = (props) => (
  <StyledPagination {...props} />
);

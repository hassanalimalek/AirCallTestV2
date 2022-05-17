import { boxProperties,  } from '../../shared-styles';
import styled, { css } from 'styled-components';
import { PaginationProps } from '../../../types';
import { Pagination } from 'antd';

export const StyledPagination = styled((props: PaginationProps) => {
  return <Pagination {...props} />;
})`
  ${boxProperties};
`;



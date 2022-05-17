import { FormItemProps } from '../../../types';

import { StyledFormItem } from './elements';

export const FormItem: React.FC<FormItemProps> = (props) => (
  <StyledFormItem {...props} />
);

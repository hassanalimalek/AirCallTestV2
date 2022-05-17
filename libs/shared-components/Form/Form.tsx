import { FormProps } from '../../../types';
import { ConfigProvider, Form as AntForm } from 'antd';

import { StyledForm } from './elements';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  pattern: {
    mismatch: '${name} does not match pattern ${pattern}',
  },
  required: '${name} is required',
  string: {
    len: '${name} must be ${len} digits',
  },
  types: {
    email: 'Enter a valid Email',
    password: 'Password is required',
  },
};

const useForm = AntForm.useForm;

export const Form: React.FC<FormProps> = ({ children, ...props }) => (
  <ConfigProvider form={{ validateMessages }}>
    <StyledForm {...props}>{children}</StyledForm>
  </ConfigProvider>
);

export { useForm };

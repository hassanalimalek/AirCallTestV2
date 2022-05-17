import { boxProperties } from '../../shared-styles';
import { omitCSSProps } from '../../shared-utils/props';
import { FormItemProps, FormListProps, FormProps } from '../../../types';
import { Form } from 'antd';
import styled from 'styled-components';

export const StyledForm = styled((props: FormProps) => {
  const domProps = omitCSSProps(props);
  return <Form {...domProps} />;
})`
  padding: 0 2px;
  ${boxProperties};
`;

export const StyledFormItem = styled((props: FormItemProps) => {
  const domProps = omitCSSProps(props);
  return <Form.Item {...domProps} />;
})`
  margin-bottom: 26px;

  .ant-form-item-control {
    line-height: 1;
    .StripeElement,
    .StripeElementIdeal,
    .StripeElementFpx,
    input {
      margin: 0;
    }
    .ant-form-item-explain {
      font-size: 12px;
      position: absolute;
      top: 100%;
      right: 0;
    }
    .ant-form-item-control-input {
      min-height: auto;
      font-family: MrEavesMod;
    }
  }

  &.signup-password .ant-form-item-explain {
    position: static;
    text-align: right;
  }

  .ant-form-item-label {
    text-transform: uppercase;
    font-family: MrEavesMod;
    letter-spacing: 3px;
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
    display: inline-block;
    margin-right: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    content: '';
  }
`;

export const StyledFormList = styled((props: FormListProps) => {
  const domProps = omitCSSProps(props);
  return <Form.List {...domProps} />;
})`
  padding: 0 2px;
  ${boxProperties};
`;

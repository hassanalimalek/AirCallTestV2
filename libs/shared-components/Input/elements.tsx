import { boxProperties } from '../../shared-styles';
import { omitCSSProps } from '../../shared-utils/props';
import {
  InputNumberProps,
  InputPasswordProps,
  InputProps,
  TextAreaProps,
} from '../../../types';
import { Input, InputNumber } from 'antd';
import { forwardRef } from 'react';
import styled from 'styled-components';

const { TextArea } = Input;

export const StyledTextArea = styled((props: TextAreaProps) => {
  const domProps = omitCSSProps(props);
  return <TextArea {...domProps} />;
})``;

export const StyledInput = styled(
    forwardRef<Input, InputProps>((props, ref) => {
      const domProps = omitCSSProps(props);
      return <Input {...domProps} ref={ref} />;
    })
  )`
  border: 1px solid #d8d8d8;
  color: #313938;
  font-size: 16px;
  padding: 11px;

  &[disabled] {
    background-color: #f9f9f9;
    color: initial;
  }
  &::placeholder {
    color: #9a9a9a;
  }
  &:hover,
  focus,
  active {
    border-color: #313938 !important;
  }

  &&.ant-input:focus,
  &.ant-input-focused {
    border-color: #313938;
    box-shadow: none;
  }

  ${boxProperties};
`;

export const StyledNumberInput = styled((props: InputNumberProps) => {
  const domProps = omitCSSProps(props);
  return <InputNumber {...domProps} />;
})`
  border: 1px solid #d8d8d8;
  height: 48px;
  padding: 4px;
  width: 100%;

  .ant-input-number-input-wrap {
    font-size: 16px;
  }

  .ant-input-number-input {
    font-size: 16px;
    padding: 18px 11px;
  }

  &::placeholder {
    color: #9a9a9a;
  }

  &:hover,
  focus,
  active {
    border-color: #313938 !important;
  }

  &&.ant-input-number:focus,
  &.ant-input-number-focused {
    border-color: #313938;
    box-shadow: none;
  }
`;

export const StyledInputPassword = styled(
  forwardRef<Input, InputPasswordProps>((props, ref) => {
    const domProps = omitCSSProps(props);
    return <Input.Password {...domProps} ref={ref} />;
  })
)`
border: 1px solid #d8d8d8;
  color: #313938;
  font-size: 16px;
  padding: 11px;

  &[disabled] {
    background-color: #f9f9f9;
    color: initial;
  }

  .ant-input-password-input {
    font-size: 16px;
    padding: 18px 11px;
  }

  &::placeholder {
    color: #9a9a9a;
  }

  &:hover,
  focus,
  active {
    border-color: #313938 !important;
  }

  &&.ant-input-number:focus,
  &.ant-input-number-focused {
    border-color: #313938;
    box-shadow: none;
  }

  ${boxProperties};
`;

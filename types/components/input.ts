import {
    InputProps as AntInputProps,
    PasswordProps as AntInputPasswordProps,
    TextAreaProps as AntTextAreaProps,
  } from 'antd/es/input';
  import { InputNumberProps as AntInputNumberProps } from 'antd/es/input-number';
  
  import { BoxProperties } from '../css';
  
  export interface InputProps
    extends Omit<AntInputProps, 'width' | 'height'>,
      BoxProperties {
    ref?: React.Ref<HTMLInputElement>;
  }
  

  
  export type InputNumberProps = AntInputNumberProps & BoxProperties;
  export type TextAreaProps = AntTextAreaProps & BoxProperties;
  export type InputPasswordProps = AntInputPasswordProps & BoxProperties;
  
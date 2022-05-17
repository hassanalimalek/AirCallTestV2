import { BoxProperties, BoxProps } from '../../types';
import { ButtonProps as AntButtonProps } from 'antd/es/button';
import { Ref } from 'react';

type ButtonKind =
  | 'blueContrast'
  | 'disabled'
  | 'basic'
  | 'inverted'
  | 'primary'
  | 'auth'
  | 'orangeContrast'
  | 'greyInverted'
  | 'transparent';

export interface ButtonProps
  extends Omit<AntButtonProps, 'size'>,
    BoxProperties {
  ref?: Ref<HTMLButtonElement>;
  kind?: ButtonKind;
  fluid?: boolean;
  active?: boolean;
  size?: 'small';
}

export interface AddEditButtonProps extends BoxProperties {
  children?: React.ReactNode;
  label: string;
  fontSize?: string;
  handleButtonClick: () => void;
  editMode: boolean;
}


export interface StyledStepButtonProps extends BoxProps {
  active?: boolean;
}

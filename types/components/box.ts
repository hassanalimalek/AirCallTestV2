import { BoxProperties } from '../../types';
import { AriaAttributes, Ref } from 'react';

type DivElProps = JSX.IntrinsicElements['div'] & AriaAttributes;

export interface BoxProps extends DivElProps, BoxProperties {
  ref?: Ref<HTMLDivElement>;
}

export interface CommentBoxProps extends DivElProps, BoxProperties {
  comment: string;
  src: string;
  title: string;
  time: string;
}

export interface MessagesMenuBoxProps {
  img: string;
  name: string;
  description: string;
  date: string;
  eventName: string;
}
export interface MessagesChatBoxProps {
  img: string;
  name: string;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fileList: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePreview: (file: any) => void;
  time: string;
}

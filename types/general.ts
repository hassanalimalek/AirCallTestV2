import { RadioChangeEvent } from 'antd/es/radio';
import { Dispatch } from 'react';
import { UserState } from '../types';
import { ChangeEvent, DragEvent } from 'react';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type EventType = ChangeEvent | DragEvent | RadioChangeEvent;

// Context Action
export interface Action {
    type: string;
    payload?: Any;
  }
  

  export interface ContextProviderValues {
    state:  UserState ;
    dispatch: Dispatch<Action>;
  }
  
import {
    FormInstance as AntFormInstance,
    FormItemProps as AntFormItemProps,
    FormListProps as AntFormListProps,
    FormProps as AntFormProps,
  } from 'antd/es/form';
  
  import { BoxProperties } from '../css';
  
  export type FormProps = AntFormProps & BoxProperties;
  export type FormItemProps = AntFormItemProps & BoxProperties;
  export type FormListProps = AntFormListProps & BoxProperties;
  export type FormInstance = AntFormInstance;

  export interface SignInFormProps {
    handleFormSubmitted: (
        username:string,
        password:string
    ) => void;
    showLoader: boolean;
    heading: string;
  }
  
  
import { LayoutProps as AntLayoutProps } from 'antd/es/layout';
import { SiderProps as AntSiderProps } from 'antd/es/layout/Sider';

import { BoxProperties } from '../css';

export type LayoutProps = AntLayoutProps & BoxProperties;

export type SiderProps = AntSiderProps & BoxProperties;

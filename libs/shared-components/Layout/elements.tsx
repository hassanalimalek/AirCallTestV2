import { boxProperties, theme } from '../../shared-styles';
import { LayoutProps, SiderProps } from '../../../types';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';

export const StyledLayout = styled((props: LayoutProps) => {
  return <Layout {...props} />;
})`
  ${boxProperties};
`;

export const StyledContent = styled((props: LayoutProps) => {
  return <Content {...props} />;
})`
  background: ${theme.white};
  height: 100vh;
  overflow: auto;
  ${boxProperties};
`;

export const StyledHeader = styled((props: LayoutProps) => {
  return <Header {...props} />;
})`
  background: ${theme.concrete};
  /* 1000 is the zIndex of the modal */

  box-shadow: 0 1px 0 0 rgb(112 112 112 / 16%) !important;

  // box-shadow: 0 1px 0 0 ${theme.dustyGrey} !important;
  padding: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;

  ${boxProperties};
`;

export const StyledFooter = styled((props: LayoutProps) => {
  return <Footer {...props} />;
})`
  ${boxProperties};
`;

export const StyledSider = styled((props: SiderProps) => {
  return <Sider {...props} />;
})`
  background: ${theme.white};
  box-shadow: 1px 1px 1px 0 rgb(112 112 112 / 16%) !important;
  ${boxProperties};
`;

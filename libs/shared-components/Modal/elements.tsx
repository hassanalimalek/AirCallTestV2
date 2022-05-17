import { boxProperties, theme } from '../../shared-styles';
import { ModalProps } from '../../../types';
import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledModal = styled((props: ModalProps) => {
  return <Modal {...props} />;
})`
  transform: none;
  .ant-modal-title {
    color: ${theme.capeCod};
    font-family: Flatline;
    font-size: 20px;
    line-height: 28px;
  }
  ${boxProperties};
`;

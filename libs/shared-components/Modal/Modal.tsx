import { ModalProps } from '../../../types';

import { StyledModal } from './elements';

export const Modal: React.FC<ModalProps> = (props) => (
  <StyledModal {...props} />
);

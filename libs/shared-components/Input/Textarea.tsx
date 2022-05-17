import { TextAreaProps } from '../../../types';

import { StyledTextArea } from './elements';

export const TextArea: React.FC<TextAreaProps> = (props) => (
  <StyledTextArea {...props} />
);

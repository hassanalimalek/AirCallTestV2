import { boxProperties  } from '../../shared-styles';
import { omitCSSProps, omitProps } from '../../shared-utils/props';
import {  TextProps } from '../../../types';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';


export const StyledText: React.FC<TextProps> = styled(
  forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
    const restProps = omitCSSProps(props);
    const domProps = omitProps(restProps, ['overflow']);
    return <span {...domProps} ref={ref} />;
  })
)`
  && {
    ${boxProperties};
  }
  font-family: MrEavesMod;
`;

// export const StyledClickableText = styled((props: ClickableTextProps) => (
//   <StyledText {...props} />
// ))`
 
//   cursor: pointer;
//   font-family: MrEavesMod;

//   &:hover {
//     text-decoration: underline;
//   }
//   letter-spacing: 3px;
//   text-decoration: none;
//   text-transform: uppercase;
// `;

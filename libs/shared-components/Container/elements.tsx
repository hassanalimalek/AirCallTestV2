import { boxProperties, maxExtraSmall } from '../../shared-styles';
import { omitCSSProps, omitProps } from '../../shared-utils/props';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ContainerProps, FlexContainerProps } from '../../../types';

const baseContainerStyles = css<ContainerProps>`
  margin: 0 auto;
  max-width: calc(1190px + 24px);
  padding: 0 24px;
  width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
`

const containerStyles = css<ContainerProps>`
  ${baseContainerStyles};

  ${({ fluid }) =>
    fluid &&
    css`
      max-width: 100%;
    `};
`;


export const StyledContainer = styled(
  forwardRef<HTMLDivElement, ContainerProps>(({ children, ...props }, ref) => {
    const restProps = omitProps(props, ['fluid', 'kind']);
    const domProps = omitCSSProps(restProps);
    return (
      <div {...domProps}  ref={ref}>
        {children}
      </div>
    );
  })
)`
  
  ${containerStyles}
  ${boxProperties};
`;

export const StyledFlexContainer = styled(
  forwardRef<HTMLDivElement, FlexContainerProps>((props, ref) => {
    const restProps = omitProps(props, ['inline']);
    const domProps = omitCSSProps(restProps);
    return <div {...domProps}  ref={ref} />;
  })
)`
  display: flex;
  ${boxProperties};
`;

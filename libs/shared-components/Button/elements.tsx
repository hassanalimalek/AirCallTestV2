import { boxProperties, maxSmall, theme } from '../../shared-styles';
import { omitCSSProps, omitProps } from '../../shared-utils/props';
import { ButtonProps } from '../../../types';
import { Button as AntButton } from 'antd';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const buttonBase = css`
  align-items: center;
  border: none;
  border-radius: 2px;
  display: flex;
  display: inline-block;
  flex-direction: row;
  font-family: MrEavesMod;
  font-size: 14px;
  height: auto;
  justify-content: center;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    text-decoration: none;
  }

  & > span {
    display: inline;
  }

  @media only screen and (max-width: ${maxSmall}) {
    font-size: 14px !important;
  }
`;

const InvertedButton = css<ButtonProps>`
  ${buttonBase};
  background: transparent !important;
  border: 1px solid ${theme.lemonGrass} !important;
  color: ${theme.lemonGrass};
  &:hover,
  &:active,
  &:focus {
    background-color: ${theme.lemonGrass};
    border-color: ${theme.lemonGrass};
    color: ${theme.white};
  }

  ${({ active = true }) =>
    !active &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
`;

const PrimaryButton = css<ButtonProps>`
  ${buttonBase};
  background-color: ${theme.lemonGrass};
  border: 1px solid ${theme.lemonGrass};
  color: ${theme.white};
  &:hover,
  &:active,
  &:focus {
    background-color: ${theme.lemonGrass};
    border: 1px solid ${theme.lemonGrass};
    color: ${theme.white};
    opacity: 0.8;
  }

  ${({ active = true }) =>
    !active &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
`;

const BasicButton = css<ButtonProps>`
  ${buttonBase};
  background: ${theme.white};
  border: 1px solid ${theme.alto};
  color: ${theme.capeCod};

  &:hover {
    border-color: ${theme.lemonGrass};
    color: ${theme.lemonGrass};
  }

  ${({ active }) =>
    active &&
    css`
      border-color: ${theme.lemonGrass};
      color: ${theme.lemonGrass};
    `}
`;

const DisabledButton = css<ButtonProps>`
  ${PrimaryButton};
  opacity: 0.4;
  pointer-events: none;
`;

const TransparentButton = css<ButtonProps>`
  ${buttonBase};
  background: transparent !important;
  padding: 0;
  &:focus,
  &:hover {
    background: transparent !important;
    color: ${theme.lemonGrass};
  }
`;

const SmallButton = css<ButtonProps>`
  ${buttonBase};
  padding: padding: 10px 16px !important;
  height: 34px;
`;

const StandardButton = css<ButtonProps>`
${buttonBase};
  padding: padding: 13px 16px !important;
  height: 40px;
`;

const LargeButton = css<ButtonProps>`
${buttonBase};
  padding: padding: 15px 24px !important;
  height: 44px;
`;

export const buttonStyles = css<ButtonProps>`
  ${({ kind }) => {
    switch (kind) {
      case 'disabled':
        return css`
          ${DisabledButton}
        `;
      case 'basic':
        return css`
          ${BasicButton};
        `;
      case 'transparent':
        return css`
          ${TransparentButton}
        `;
      case 'inverted':
        return css`
          ${InvertedButton}
        `;
      default:
        return css`
          ${PrimaryButton};
        `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          ${SmallButton}
        `;
      case 'large':
        return css`
          ${LargeButton}
        `;
      default:
        return css`
          ${StandardButton}
        `;
    }
  }};
`;

export const StyledButton = styled(
  forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    const restProps = omitProps(props, ['active', 'kind', 'fluid', 'size']);
    const domProps = omitCSSProps(restProps);
    return (
      <AntButton ref={ref} {...domProps}>
        {children}
      </AntButton>
    );
  })
)`
  ${buttonStyles};
  && {
    ${boxProperties};
  }
`;

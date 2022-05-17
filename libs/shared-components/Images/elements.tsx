import { boxProperties, theme } from '../../shared-styles';
import { omitCSSProps, omitProps } from '../../shared-utils/props';
import { ImageProps } from '../../../types';
import styled, { css } from 'styled-components';

const imageBase = css<ImageProps>`
  object-fit: ${({ objectFit = 'cover' }) => objectFit};
  width: auto;
`;

const avatarImage = css`
  ${imageBase}
  border-radius: 500rem;
`;

const raisedImage = css`
  ${imageBase}
  box-shadow: 0 3px 6px 0 ${theme.dustyGrey};
`;

const defaultImage = css`
  ${imageBase}
`;

const fluidImage = css`
  ${imageBase}
  width: 100%;
`;

const imageStyles = css<ImageProps>`
  ${({ kind }) => {
    switch (kind) {
      case 'avatar':
        return css`
          ${avatarImage}
        `;
      case 'fluid':
        return css`
          ${fluidImage}
        `;
      case 'raised':
        return css`
          ${raisedImage};
        `;
      default:
        return css`
          ${defaultImage};
        `;
    }
  }};
`;

export const StyledImage: React.FC<ImageProps> = styled((props: ImageProps) => {
  const { alt, ...restProps } = omitCSSProps(props);
  const domProps = omitProps(restProps, ['kind', 'objectFit']);
  return <img {...domProps} alt={alt} />;
})`
  &&&& {
    ${imageStyles};
    ${boxProperties};
  }
`;

import styled, { css, DefaultTheme } from 'styled-components';

import * as LabelBase from '@radix-ui/react-label';

import { SelectProps } from '.';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Label = styled(LabelBase.Root)`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spaces[1]};
    text-transform: uppercase;
    font-weight: ${theme.fontWeights.medium};
  `}
`;

const selectModifiers = (theme: DefaultTheme) => ({
  size: {
    xs: css`
      padding: ${theme.spaces[1]} ${theme.spaces[2]};
      font-size: ${theme.fontSizes['3xs']};
    `,
    sm: css`
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      font-size: ${theme.fontSizes['2xs']};
    `,
    md: css`
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      font-size: ${theme.fontSizes.xs};
    `,
    lg: css`
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      font-size: ${theme.fontSizes.md};
    `
  },
  variant: {
    solid: css`
      background: ${theme.colors.black};
    `,
    outline: css`
      background: ${theme.colors.grey[500]};
    `
  },
  disabled: css`
    opacity: 0.5;
    cursor: not-allowed;
  `
});

type SelectStyledProps = {
  selectSize?: SelectProps['size'];
} & Pick<SelectProps, 'disabled' | 'variant'>;

export const WrapperSelect = styled.div<SelectStyledProps>`
  ${({ theme, disabled, variant }) => css`
    display: flex;
    align-items: center;
    border: 1px solid;
    border-color: ${theme.colors.grey[100]};
    padding-right: ${theme.spaces[2]};

    ${selectModifiers(theme).variant[variant!]}
    ${disabled && selectModifiers(theme).disabled}

    &:hover {
      border-color: ${theme.colors.pink[200]};
    }

    &:active {
      border-color: ${theme.colors.teal[100]};
    }
  `}
`;

export const SelectStyled = styled.select<SelectStyledProps>`
  ${({ theme, variant, selectSize }) => css`
    width: ${theme.sizes.full};
    color: ${theme.colors.white};
    font-family: inherit;
    appearance: none;
    border: none;
    transition: 0.2s;

    ${selectModifiers(theme).variant[variant!]}
    ${selectModifiers(theme).size[selectSize!]}
  `}
`;

export const Message = styled.small`
  ${({ theme }) => css`
    color: ${theme.colors.grey[100]};
    font-size: ${theme.fontSizes.xs};
    margin-top: 5px;
    display: block;
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red[100]};
    font-size: ${theme.fontSizes.xs};
  `}
`;

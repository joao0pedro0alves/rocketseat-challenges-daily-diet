import type defaultTheme from '@/theme'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css, type DefaultTheme } from 'styled-components/native'

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'

export interface TypographyContainerProps {
  variant: TypographyVariants
  color: keyof typeof defaultTheme.COLORS
}

export const typographyVariants = (
  theme: DefaultTheme
): Record<TypographyVariants, FlattenSimpleInterpolation> => ({
  h1: css`
    font-size: ${theme.FONT_SIZE.XLL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
  h2: css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
  h3: css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
  h4: css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
  body1: css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `,
  body2: css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `,
  body3: css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `,
  caption: css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `,
})

export const TypographyContainer = styled.Text<TypographyContainerProps>`
  color: ${({ theme, color }) => theme.COLORS[color] || theme.COLORS.GRAY_100};

  ${({ theme, variant }) => typographyVariants(theme)[variant]}
`

import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { Theme } from '../../lib/styles/theme'

type Variant = 'primary' | 'secondary'

const variants: Record<Variant, FlattenInterpolation<ThemeProps<Theme>>> = {
  primary: css`
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.mediumContrast};
  `,
  secondary: css`
    color: ${({ theme }) => theme.color.text};
    text-decoration: underline;
  `,
}

type Props = {
  variant: Variant
}

export const Link = styled.a<Props>`
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  ${({ variant }) => variants[variant]};
`

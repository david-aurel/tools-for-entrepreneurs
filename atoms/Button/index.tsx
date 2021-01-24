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
  `,
  secondary: css``,
}

export const Button = styled.button<{ variant: Variant }>`
  background: none;
  border: none;
  cursor: pointer;
  ${({ variant }) => variants[variant]}
`

import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { Theme } from '../../lib/styles/theme'

type Variant = 'header' | 'cardTitle' | 'cardDescription'
const variants: Record<Variant, FlattenInterpolation<ThemeProps<Theme>>> = {
  header: css`
    font-size: 2.5rem;
  `,
  cardTitle: css`
    font-size: 1.5rem;
  `,
  cardDescription: css`
    font-size: 1rem;
    & a,
    a:visited {
      color: ${({ theme }) => theme.color.text};
    }
  `,
}

type Color = 'primary' | 'text'
const colors: Record<Color, FlattenInterpolation<ThemeProps<Theme>>> = {
  primary: css`
    color: ${({ theme }) => theme.color.contrast};
  `,
  text: css`
    color: ${({ theme }) => theme.color.text};
  `,
}

type Props = {
  variant: Variant
  color?: Color
}
export const Text = styled.span<Props>`
  margin: 0;
  ${({ variant }) => variants[variant]}
  ${({ color }) => colors[color]};
`

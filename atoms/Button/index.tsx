import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { Theme } from '../../lib/styles/theme'

type Variant = 'active' | 'inactive'

const variants: Record<Variant, FlattenInterpolation<ThemeProps<Theme>>> = {
  active: css`
    background-color: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.primary};
  `,
  inactive: css`
    border: 2px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text};
  `,
}

export const Button = styled.button<{ variant: Variant }>`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ variant }) => variants[variant]};
`

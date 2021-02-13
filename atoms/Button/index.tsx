import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { Theme } from '../../lib/styles/theme'

type Variant = 'primary' | 'outline' | 'simpleActive' | 'simpleInactive'

const common = css`
  margin-right: 10px;
  padding: 10px 15px;
`

const variants: Record<Variant, FlattenInterpolation<ThemeProps<Theme>>> = {
  primary: css`
    background-color: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.primary};
    ${common}
  `,
  outline: css`
    border: 2px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.text};
    ${common}
  `,
  simpleActive: css`
    color: ${({ theme }) => theme.color.text};
    text-decoration: underline;
  `,
  simpleInactive: css`
    color: ${({ theme }) => theme.color.text};
  `,
}

export const Button = styled.button<{ variant: Variant }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: start;
  ${({ variant }) => variants[variant]};
`

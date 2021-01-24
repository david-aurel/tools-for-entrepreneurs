import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.card};
  display: block;
  margin: 2rem 0;
  max-width: 400px;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
`

import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color.card};
  max-width: 400px;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  & > h3 {
    margin-bottom: 10px;
  }
  & > p {
    margin-bottom: 20px;
  }
  & > a {
    margin-top: auto;
  }
`

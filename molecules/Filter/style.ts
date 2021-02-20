import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  & > * {
    margin-bottom: 20px;
  }
  ${({ theme }) => theme.mq} {
    max-height: 500px;
    overflow: scroll;
  }
`

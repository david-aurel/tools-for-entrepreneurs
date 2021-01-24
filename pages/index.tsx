import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`
const Title = styled.h1`
  color: ${({ theme }) => theme.color.primary};
`

export const Home = () => (
  <Container>
    <Title className="m-1">Test</Title>
  </Container>
)

export default Home

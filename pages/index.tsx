import styled from 'styled-components'
import { getAirtableData } from '../lib/getAirtableData'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`
const Title = styled.h1`
  color: ${({ theme }) => theme.color.primary};
`

export const Home = (props) => (
  <Container>
    <Title>Test</Title>
    <p>{JSON.stringify(props)}</p>
  </Container>
)

export default Home

export const getStaticProps = async () => {
  const data = await getAirtableData().catch((err) => {
    const error = JSON.parse(JSON.stringify(err))
    return { props: { error } }
  })

  return { props: { data } }
}

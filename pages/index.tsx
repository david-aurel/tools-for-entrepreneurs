import React from 'react'
import styled from 'styled-components'
import { getAirtableData } from '../lib/getAirtableData'
import { Card } from '../molecules/Card'
import { Text } from '../atoms/Text'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`

type Error = {
  error: string
  message: string
  statusCode: string
}
type Category = string[] | []
type Tool = {
  Name: string
  Description: string
  URL: string
  Category: Category
}
type Props = {
  data: {
    tools: Tool[]
    categories: Category
  }
  error: Error
}
export const Home: React.FC<any> = (props: Props) => {
  const { data, error } = props

  const mappedCards = data.tools.map((tool) => {
    const { Name, Description, URL } = tool
    return (
      <Card key={tool.Name} name={Name} description={Description} url={URL} />
    )
  })
  return (
    <Container>
      <Text variant="header">Tools for entrepreneurs 🔧</Text>
      {mappedCards}
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const data = await getAirtableData().catch((err) => {
    const error = JSON.parse(JSON.stringify(err))
    return { props: { error } }
  })

  return { props: { data } }
}

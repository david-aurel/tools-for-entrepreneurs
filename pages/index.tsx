import React, { useState } from 'react'
import styled from 'styled-components'
import { getAirtableData } from '../lib/getAirtableData'
import { Card } from '../molecules/Card'
import { Text } from '../atoms/Text'
import { Filter } from '../molecules/Filter'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`

type Error = {
  error: string
  message: string
  statusCode: string
}
export type Category = string[]
type Tool = {
  Name: string
  Description: string
  URL: string
  Category: Category
}
type Props = {
  data: {
    tools?: Tool[]
    categories?: Category
  }
  error?: Error
}
export const Home: React.FC<any> = (props: Props) => {
  const { data, error } = props
  const [filter, setFilter] = useState<string[]>([])

  const mappedCards =
    data?.tools?.length &&
    data.tools.map((tool) => {
      const { Name, Description, URL, Category } = tool

      const isActive = Category.some((item) => filter.includes(item))
      if (!isActive) return

      return (
        <Card key={tool.Name} name={Name} description={Description} url={URL} />
      )
    })

  const updateFilter = (option: string) => {
    if (filter.includes(option)) {
      setFilter((state) => state.filter((item) => item !== option))
    } else {
      setFilter((state) => [...state, option])
    }
  }

  if (error) return <h1>An error occurred: {JSON.stringify(error)}</h1>
  return (
    <Container>
      <Text variant="header" as="h1">
        Tools for entrepreneurs 🔧
      </Text>
      <Filter
        options={data.categories}
        filter={filter}
        onSubmit={updateFilter}
      />
      {mappedCards}
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  let error = null
  let data = []
  await getAirtableData()
    .catch((err) => {
      error = JSON.parse(JSON.stringify(err))
    })
    .then((result) => {
      if (result) {
        data = result
      }
    })

  return { props: { data, error } }
}

import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { getAirtableData } from '../lib/getAirtableData'
import { Card } from '../molecules/Card'
import { Text } from '../atoms/Text'
import { Hamburger } from '../atoms/Hamburger'
import { Filter } from '../molecules/Filter'

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  display: grid;
  grid-template-columns: 100px repeat(11, 1fr);
`
const Headline = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.mq} {
    text-align: start;
  }
`

type FilterWrapperProps = {
  mobileActive: boolean
}
const FilterWrapper = styled.div<FilterWrapperProps>`
  display: none;
  ${({ theme }) => theme.mq} {
    display: inline-block;
    grid-column: 1 / 2;
  }
  @media (max-width: 500px) {
    ${({ mobileActive }) =>
      mobileActive &&
      css`
        display: inline-block;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        padding: 30px;
        background: ${({ theme }) => theme.color.background};
        :before {
          content: '';
          position: absolute;
          top: 0;
          left: 100%;
          width: 100vw;
          height: 100vh;
          background: black;
          opacity: 0.5;
        }
      `}
  }
`
const Content = styled.main`
  grid-column: 1 / -1;
  ${({ theme }) => theme.mq} {
    grid-column: 2 / -1;
  }
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
  const [filter, setFilter] = useState<string[]>(['featured'])
  const [hamburgerActive, setHamburgerActive] = useState(false)

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

  if (error) return <h1>An error occurred: {JSON.stringify(error)}</h1>
  return (
    <Container>
      <Headline>
        <Hamburger onClick={() => setHamburgerActive(true)} />
        <Text variant="header" as="h1">
          Tools for entrepreneurs 🔧
        </Text>
      </Headline>
      <FilterWrapper
        mobileActive={hamburgerActive}
        onClick={() => setHamburgerActive(false)}
      >
        <Filter
          options={data.categories}
          filter={filter}
          onSubmit={(option) => {
            setFilter([option])
          }}
        />
      </FilterWrapper>

      <Content>{mappedCards}</Content>
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

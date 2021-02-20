import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import airtableData from '../airtableData.json'
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
    grid-column: 1 / 3;
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
  margin-top: 30px;
  display: grid;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(auto-fill, min(100%));
  ${({ theme }) => theme.mq} {
    grid-column: 3 / -1;
    grid-template-columns: repeat(auto-fill, min(350px));
  }
`

export type Category = string[]
export type Tool = {
  'Product Name': string
  'Affiliate Program': 'Yes' | 'No'
  Description: string
  URL: string
  Category: Category
}
type Props = {
  data: {
    tools?: Record<string, Tool[]>
    categories?: Category
  }
}
export const Home: React.FC<any> = (props: Props) => {
  const { data } = props
  const [filter, setFilter] = useState('Featured')
  const [hamburgerActive, setHamburgerActive] = useState(false)

  const activeCards =
    data?.tools[filter]?.length &&
    data?.tools[filter].map((tool) => {
      const {
        ['Affiliate Program']: affiliate,
        ['Product Name']: name,
        Category: category,
        Description: description,
        URL: url,
      } = tool

      return <Card key={name} name={name} description={description} url={url} />
    })

  const featuredCards = []

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
            setFilter(option)
          }}
        />
      </FilterWrapper>

      <Content>{filter === 'Featured' ? featuredCards : activeCards}</Content>
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const data = airtableData
  return { props: { data } }
}

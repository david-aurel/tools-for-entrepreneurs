import React, { useEffect } from 'react'
import airtableData from '../airtableData.json'
import { Text } from '../atoms/Text'
import { Link } from '../atoms/Link'
import styled from 'styled-components'
import { Tool } from './index'

const LinkWrapper = styled.div`
  margin-top: 30px;
`

type Props = {
  data: Tool
}

const Product: React.FC<Props> = (props) => {
  const product = props.data
  const {
    ['Product Name']: name,
    Category: category,
    Description: description,
    URL: productUrl,
  } = product

  return (
    <>
      <span>←</span>
      <Link variant="secondary" href="/">
        Go back
      </Link>
      <h1>{name}</h1>
      <span>category: {category}</span>
      <article>
        <Text variant="cardDescription" as="div">
          {description}
        </Text>
      </article>
      {!!productUrl && (
        <LinkWrapper>
          <Link variant="primary" href={productUrl}>
            Go to {name}'s website
          </Link>
        </LinkWrapper>
      )}
    </>
  )
}

export default Product

export const getStaticProps = async (context) => {
  const productName = context.params.product
  const data = airtableData.paths[productName]

  return { props: { data } }
}

export function getStaticPaths() {
  const pathsArr = Object.keys(airtableData.paths)
  const paths = pathsArr.map((path) => ({
    params: { product: path },
  }))
  return {
    paths,
    fallback: false,
  }
}

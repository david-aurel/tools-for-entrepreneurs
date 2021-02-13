import React from 'react'
import { useRouter } from 'next/router'
import { getAirtableData } from '../lib/getAirtableData'
import { Text } from '../atoms/Text'
import Markdown from 'markdown-to-jsx'
import NextLink from 'next/link'
import { Link } from '../atoms/Link'

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
    paths?: string[]
  }
  error?: Error
}

const Product: React.FC<Props> = (props) => {
  const router = useRouter()
  const { product: url } = router.query
  const product = props.data.tools.find((tool) => tool.Name === url)
  const { Name, Category, Description, URL } = product

  return (
    <>
      <span>←</span>
      <Link variant="secondary" href="/">
        Go back
      </Link>
      <h1>{Name}</h1>
      <span>category: {Category}</span>
      <article>
        <Text variant="cardDescription" as="div">
          <Markdown>{Description}</Markdown>
        </Text>
      </article>

      <Link variant="primary" href={URL}>
        Go to {Name}'s website
      </Link>
    </>
  )
}

export default Product

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

export async function getStaticPaths() {
  let error = null
  let data: Props['data'] = {}

  await getAirtableData({ onlyPaths: true })
    .catch((err) => {
      error = JSON.parse(JSON.stringify(err))
    })
    .then((result) => {
      if (result) {
        data = result
      }
    })
  const paths = data.paths.map((path) => ({
    params: { product: path },
  }))
  return {
    paths,
    fallback: false,
  }
}

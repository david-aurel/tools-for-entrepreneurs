import React from 'react'
import { Container } from './style'
import { Text } from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import NextLink from 'next/link'
import Markdown from 'markdown-to-jsx'

type Props = {
  name: string
  description: string
  url: string
}

const Card: React.FC<Props> = ({ name, description, url }) => {
  return (
    <Container>
      <Text variant="cardTitle" as="h3">
        {name}
      </Text>
      <Text variant="cardDescription" as="div">
        <Markdown>{description}</Markdown>
      </Text>
      <NextLink href={`/${name}`}>
        <Link variant="primary">Checkout {name}</Link>
      </NextLink>
    </Container>
  )
}

export { Card }

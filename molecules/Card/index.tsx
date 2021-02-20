import React from 'react'
import { Container } from './style'
import { Text } from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import NextLink from 'next/link'

type Props = {
  name: string
  description: string
  url: string
}

const Card: React.FC<Props> = ({ name, description, url }) => {
  const path = name?.toLowerCase().replace(' ', '-').replace('.', '-')
  return (
    <Container>
      <Text variant="cardTitle" as="h3">
        {name}
      </Text>
      <Text variant="cardDescription" as="div">
        {description}
      </Text>
      <NextLink href={`/${path}`}>
        <Link variant="primary">Checkout {name}</Link>
      </NextLink>
    </Container>
  )
}

export { Card }

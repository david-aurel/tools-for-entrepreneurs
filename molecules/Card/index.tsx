import React from 'react'
import { Container } from './style'
import { Text } from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Markdown from 'markdown-to-jsx'

type Props = {
  name: string
  description: string
  url: string
}

const Card: React.FC<Props> = ({ name, description, url }) => {
  return (
    <Container>
      <Text variant="cardTitle" as="h2">
        {name}
      </Text>
      <Text variant="cardDescription" as="div">
        <Markdown>{description}</Markdown>
      </Text>
      <Link variant="primary" color="primary" href={url}>
        Go to Website
      </Link>
    </Container>
  )
}

export { Card }

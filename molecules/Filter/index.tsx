import React from 'react'
import { Button } from '../../atoms/Button'
import { Text } from '../../atoms/Text'
import { Category } from '../../pages'
import { Container } from './style'

type Props = {
  options: Category
  filter: Category
  onSubmit: (option: string) => void
}
const Filter: React.FC<Props> = ({ options, filter, onSubmit }) => {
  const list = options.map((option) => {
    const variant = filter.includes(option) ? 'active' : 'inactive'
    return (
      <Button variant={variant} key={option} onClick={() => onSubmit(option)}>
        {option}
      </Button>
    )
  })

  return (
    <Container>
      <Text variant="cardTitle" as="h2">
        Filter
      </Text>
      {list}
    </Container>
  )
}

export { Filter }

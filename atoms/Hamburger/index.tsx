import React from 'react'
import styled from 'styled-components'
type Props = {
  onClick: () => void
}

const Button = styled.button`
  display: inline-block;
  background: none;
  border: none;
  padding: 0;
  margin-right: 30px;
  span {
    width: 25px;
    height: 2px;
    margin: 5px 0;
    display: block;
    background-color: ${({ theme }) => theme.color.text};
  }
  ${({ theme }) => theme.mq} {
    display: none;
  }
`
const Hamburger: React.FC<Props> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <span />
      <span />
      <span />
    </Button>
  )
}

export { Hamburger }

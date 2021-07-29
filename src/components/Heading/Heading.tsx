import React from 'react'
import { Wrapper, Title, Subtitle } from './styles'

interface IHeadingProps {
  title: string
  subtitle?: string
}

export default (props: IHeadingProps) => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  )
}

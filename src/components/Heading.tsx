import React from 'react'
import styled from 'styled-components'

interface IHeadingProps {
  title: string
  subtitle: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h1`
  margin-top: 30px;
  font-size: 3rem;
  font-style: italic;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.5px;
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.textColor};
  transition: color ${props => props.theme.transition};
`

const Subtitle = styled.p`
  font-size: 2rem;
  font-family: ${props => props.theme.bodyFont};
  color: ${props => props.theme.textColor};
  transition: color ${props => props.theme.transition};
`

export default (props: IHeadingProps) => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  )
}

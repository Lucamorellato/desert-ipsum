import React, { ReactChild } from 'react'
import styled from 'styled-components'

interface WrapperProps {
  children: ReactChild[]
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${props => props.theme.background};
  transition: background ${props => props.theme.transition};
  min-height: 100vh;
`

export default ({ children }: WrapperProps) => {
  return <Wrapper>{children}</Wrapper>
}

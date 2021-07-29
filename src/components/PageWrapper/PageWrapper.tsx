import React, { ReactChild } from 'react'
import { Wrapper } from './styles'

interface PageWrapperProps {
  children: ReactChild[]
}


export default ({ children }: PageWrapperProps) => {
  return <Wrapper>{children}</Wrapper>
}

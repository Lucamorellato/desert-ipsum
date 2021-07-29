import React, { ReactChild } from 'react'
import { LoremContainerDiv } from './styles'

interface LoremContainerProps {
    children: ReactChild[]|ReactChild;
  }
export default ({children}: LoremContainerProps) => {
  return <LoremContainerDiv>{children}</LoremContainerDiv>
}

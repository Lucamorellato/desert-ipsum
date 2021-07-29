import React, { ReactChild } from 'react'
import { CopyText } from './styles'

interface CopyProps {
    children: ReactChild[]|ReactChild;
}

export default ({children}: CopyProps) => {
  return <CopyText>{children}</CopyText>
}

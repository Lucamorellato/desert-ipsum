import React, { ReactChild, useEffect, useContext  } from 'react'
import { makeStars, clearStars } from '../../utils/utils'
import { Wrapper } from './styles'
import { ThemeContext } from 'styled-components'


interface PageWrapperProps {
  children: ReactChild|ReactChild[]
}

export default ({ children }: PageWrapperProps) => {
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    if (themeContext.name === "dark") {
      makeStars()
    } else {
      clearStars()
    }
  }, [themeContext]);

  return <Wrapper>{children}</Wrapper>
}

import React, { ReactChild, useEffect, useContext  } from 'react'
import { makeStars, clearStars } from '../../utils/generator'
import { Wrapper } from './styles'
import { ThemeContext } from 'styled-components'


interface PageWrapperProps {
  children: ReactChild|ReactChild[]
}

export default ({ children }: PageWrapperProps) => {

  const themeContext = useContext(ThemeContext)
  console.log('Current theme: ', themeContext)

  useEffect(() => {
    if (themeContext.name === "dark") {
      makeStars()
    } else {
      clearStars()
    }
    console.log("useEffect ran")
  }, [themeContext]);

  return <Wrapper>
          {children}
        </Wrapper>
}

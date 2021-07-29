import React from 'react'
import { FooterContainer } from './styles'


export default () => {

  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} - by <a href="https://www.linkedin.com/in/luca-morellato/">Luca Mo</a> Music by: <a href="https://redblueblacksilver.bandcamp.com/">RedBlueBlackSilver</a></p>
    </FooterContainer>
  )
}

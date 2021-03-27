import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img, { GatsbyImageFluidProps } from 'gatsby-image'

interface IImageProps {
  img: GatsbyImageFluidProps
}

const Wrapper = styled.div`
  display: flex;
`

const Image = styled(Img)`
  width: 200px;

  ${`500px
    width: 150px;
  `}
`

export default (props: IImageProps) => {
  const { img } = props
  return (
    <Wrapper>
      <Image fluid={img.fluid} />
    </Wrapper>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

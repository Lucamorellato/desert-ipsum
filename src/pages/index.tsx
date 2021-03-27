import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/index'
import Image from '../components/Image'
import Heading from '../components/Heading'
import Wrapper from '../components/Wrapper'
import { GatsbyImageFluidProps } from 'gatsby-image'
import { GenerateLorem } from '../utils/generator'

interface IndexPageProps {
  location: {
    pathname: string
  }
  data: {
    image: {
      childImageSharp: GatsbyImageFluidProps
    }
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

export default ({ data, location }: IndexPageProps) => {
  const { image, site } = data
  const [lorem, setLorem] = useState<string>('')
  const [paragraphs, setParagraphs] = useState<number>(1)

  const handleClick = () => {
    setLorem(GenerateLorem(3))
  }

  const handleChange = (e: any) => {
    setParagraphs(parseInt(e.target.value))
    console.log(typeof parseInt(e.target.value))
  }

  return (
    <Layout location={location}>
      <Wrapper>
        <Image img={image.childImageSharp} />
        <Heading
          title={site.siteMetadata.title}
          subtitle={site.siteMetadata.description}
        />
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={paragraphs}
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Generate Lorem</button>
        <Heading title={lorem} />
      </Wrapper>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    image: file(relativePath: { eq: "icon1.jpg" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/index'
import Image from '../components/Image'
import Wrapper from '../components/PageWrapper/PageWrapper'
import Heading from '../components/Heading/Heading'

import { GatsbyImageFluidProps } from 'gatsby-image'

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
  return (
    <Layout location={location}>
      <Wrapper>
        <Heading
          title="404 error! Please check for temporal existence."
        />
      </Wrapper>
    </Layout>
  )
}

export const NotFoundQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

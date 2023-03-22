import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/index'
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
  return (
    <Layout location={location}>
      <Wrapper>
        <Heading
          title="500 Error! Please try again wanderer."
        />
      </Wrapper>
    </Layout>
  )
}
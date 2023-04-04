import React, { useState, useEffect, ReactEventHandler, ChangeEvent } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/index'
import Heading from '../components/Heading/Heading'
import Wrapper from '../components/PageWrapper/PageWrapper'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import { LoremContainer } from '../components/Text'
import { GatsbyImageFluidProps } from 'gatsby-image'
import { generateLorem } from '../utils/generator'

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
  const { site } = data
  const [lorem, setLorem] = useState<string>('')
  const [paragraphs, setParagraphs] = useState<number>(1)

  const handleSubmit = () => {
    const generatedLorem = generateLorem(paragraphs)
    generatedLorem && setLorem(generatedLorem) 
  }

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParagraphs(parseInt(e.target.value))
  }

  const createMarkup = () => {
    return {__html: lorem}; 
  }

  return (
    <Layout location={location}>
      <Wrapper>
        <Heading
          title={site.siteMetadata.title}
          // subtitle={site.siteMetadata.description}
        />
        <Form 
          handleSubmit={() => handleSubmit()}
          handleRange={(e:ChangeEvent<HTMLInputElement>) => handleRangeChange(e)}
          paragraphs={paragraphs} 
        />
        {lorem && (
          <LoremContainer>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </LoremContainer>
        )}
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

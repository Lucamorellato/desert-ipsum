import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface IHeadProps {
  title?: string
  description?: string
  thumbnail?: string
  article?: boolean
  pathname: string
}

export default ({
  title,
  description,
  thumbnail,
  pathname,
  article,
}: IHeadProps) => (
  <StaticQuery
    query={QueryHead}
    render={({
      site: {
        siteMetadata: {
          site,
          defaultTitle,
          titleTemplate,
          defaultDescription,
          language,
          siteUrl,
          twitter,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: "https://th-thumbnailer.cdn-si-edu.com/NsDNvU4moVeKqao5XfJgB8Ez8lg=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f2/94/f294516b-db3d-4f7b-9a60-ca3cd5f3d9b2/fbby1h_1.jpg",
        //  || `${siteUrl}/images/social.png`,
        url: `${siteUrl}${pathname}`,
        twitter,
      }
      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          <html lang={language} />

          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="application-name" content={site} />
          <link rel="canonical" href={seo.url} />

          <meta property="og:url" content={seo.url} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image} />
          {article && <meta property="og:type" content="article" />}

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={site} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <meta name="twitter:creator" content={seo.twitter} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image} />
          <meta name="twitter:url" content={seo.url} />
        </Helmet>
      )
    }}
  />
)

const QueryHead = graphql`
  query QueryHead {
    site {
      siteMetadata {
        site
        siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        language
        twitter
      }
    }
  }
`

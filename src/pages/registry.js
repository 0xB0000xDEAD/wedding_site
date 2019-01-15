import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from 'components/h1'
import Img from 'gatsby-image'

const registries = [
  {
    key: 'amazon',
    href: 'http://amazon.com'
  }, {
    key: 'target',
    href: 'http://target.com'
  }, {
    key: 'rei',
    href: 'http://rei.com'
  }, {
    key: 'westelm',
    href: 'http://west-elm.com',
  },
]

const RegistryPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Registry" />
      <SiteTitle />
      <H1>Look at the photos at:</H1>
      <Content>
        {
          registries.map(({ key, href }) => (
            <div
              style={{
                width: '50%',
                float: 'left',
              }}
            >
              <a
                key={key}
                href={href}
              >
                <Img fluid={data[key].childImageSharp.fluid} />
              </a>
            </div>
          ))
        }
      </Content>
    </Layout>
  )
}

export default RegistryPage

export const companyLogo = graphql`
  fragment companyLogo on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    amazon: file(relativePath: { eq: "amazon.png" }) {
      ...companyLogo
    }
    target: file(relativePath: { eq: "target.png" }) {
      ...companyLogo
    }
    rei: file(relativePath: { eq: "rei.png" }) {
      ...companyLogo
    }
    westelm: file(relativePath: { eq: "westelm.png" }) {
      ...companyLogo
    }
  }
`

import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'

const HOME_KEYWORDS = ['gatsby', 'wedding', 'theme', 'template', 'engaged']

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={HOME_KEYWORDS} />
    <SiteTitle />
  </Layout>
)

export default IndexPage

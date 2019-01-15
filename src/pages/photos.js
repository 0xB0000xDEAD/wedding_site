import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from 'components/h1'

const DetailsPage = () => {
  const noMargin = { margin: 0 }
  return (
    <Layout>
      <SEO title="Details" />
      <SiteTitle />
      <Content>
        <div style={{ textAlign: 'center' }}>
          <H1 style={noMargin}>Do not be silly...we can't see in the future!</H1>
          <hr />
        </div>
      </Content>
    </Layout>
  )
}

export default DetailsPage

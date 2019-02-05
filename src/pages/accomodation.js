import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from 'components/h1'
import H4 from 'components/h4'
import TEXT from 'components/text'

const AccomodationPage = () => {
  const noMargin = { margin: 0 }
  return (
    <Layout>
      <SEO title="Accomodation" />
      <SiteTitle />
      <Content>
        <div style={{ textAlign: 'center' }}>
          <H1 style={noMargin}>Where to sleep in Apulien</H1>
          <H1>Few tips to find a bed</H1>
          <hr />

          <TEXT>Placeholder</TEXT>
        </div>
      </Content>
    </Layout>
  )
}

export default AccomodationPage

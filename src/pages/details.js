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
          <H1 style={noMargin}>You're invited to our wedding</H1>
          <H1>Juny 14, 2019</H1>
          <hr />

          {/* <h4>Toys R Us</h4>
          <p style={noMargin}>123 Abc Ave</p>
          <p style={noMargin}>Portland, OR 97205</p>
          <p>(800) 123-1234</p> */}

          <h4>Masseria Luco</h4>
          <p style={noMargin}>Strada per Noci</p>
          <p style={noMargin}>Martina Franca, TA</p>
          <p>(+39)123456789</p>
        </div>
      </Content>
    </Layout>
  )
}

export default DetailsPage

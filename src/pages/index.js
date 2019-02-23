import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from '../components/h1'
import H4 from '../components/h4'
import H5 from '../components/h5'

const HOME_KEYWORDS = ['gatsby', 'wedding', 'theme', 'template', 'engaged']

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={HOME_KEYWORDS} />
    <SiteTitle />
    {/* <Content>
      <div style={{ textAlign: 'center' }}>
        <H1 style={noMargin}>You're invited to our wedding</H1>
        <H1>June 14, 2019</H1>
        <H5>Wir sagen Ja</H5>
        <H4>Basilica di San Martino</H4>
        <hr />
        <p style={noMargin}>17:00</p>
        <p style={noMargin}>Piazza Plebiscito</p>
        <p style={noMargin}>Martina Franca, TA</p>
        <H4>Masseria Luco</H4>
        <hr />
        <p style={noMargin}>Strada per Noci</p>
        <p style={noMargin}>Martina Franca, TA</p>
        <p>(+39)123456789</p>
      </div>
    </Content> */}
  </Layout>
)

export default IndexPage

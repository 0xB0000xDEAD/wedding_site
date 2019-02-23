import React from 'react'

import Layout from 'components/layout'
import SEO from 'components/seo'
import SiteTitle from 'components/siteTitle'
import Content from 'components/content'
import H1 from '../components/h1'
import H4 from '../components/h4'
import H5 from '../components/h5'
import { FormattedMessage } from 'react-intl'
import { Context } from '../components/Context'
import Provider from '../components/Provider'

const noMargin = { margin: 0 }
const DetailsPage = () => (
  <Provider>
    <Context.Consumer>
      {({ lang }) => (
        <Layout>
          <SEO title="Details" />
          <SiteTitle />
          <Content>
            <div style={{ textAlign: 'center' }}>
              <H1 /* style={noMargin} */>
                <FormattedMessage id="details_invite" />
              </H1>
              <H1>
                <FormattedMessage id="details_date" />
              </H1>
              <H4>
                <FormattedMessage id="details_talk" />
              </H4>
              {/* <H4>
            <FormattedMessage id="details_places"></FormattedMessage>
          </H4> */}
              <hr />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <H5>Basilica di San Martino</H5>
                      <H5 style={noMargin}>17:00</H5>
                      <H5 style={noMargin}>Piazza Plebiscito</H5>
                      <H5 style={noMargin}>Martina Franca, TA</H5>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <H5>Masseria Luco</H5>
                      <H5 style={noMargin}>18:30</H5>
                      <H5 style={noMargin}>Strada per noci</H5>
                      <H5 style={noMargin}>Martina Franca, TA</H5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <H5>
                <FormattedMessage id="details_bestman">
                  {/* Trauzeugen */}
                </FormattedMessage>
              </H5>
              <H4>Katharina Vögtle e Livio Salonna</H4>
              {/* <hr /> */}
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <H5>(0049-1222222)</H5>
                    </td>
                    <td style={{ textAlign: 'left' }}>
                      <H5>(0039-1555555)</H5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <H5>
                <FormattedMessage id="details_bestman_2" />
              </H5>
              <H5>
                <FormattedMessage id="details_iban" />
              </H5>
              {lang === 'de' && (
                <div>
                  <H5>
                    <FormattedMessage id="details_presents" />
                  </H5>
                  <H5>
                    <FormattedMessage id="details_presents_2" />
                  </H5>
                </div>
              )}
            </div>
          </Content>
        </Layout>
      )}
    </Context.Consumer>
  </Provider>
)

export default DetailsPage

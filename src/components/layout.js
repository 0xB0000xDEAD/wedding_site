import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { addLocaleData, IntlProvider } from 'react-intl'
import de from 'react-intl/locale-data/de'
import it from 'react-intl/locale-data/it'

import localIt from '../languages/it.json'
import localDe from '../languages/de.json'

import { Context } from '../components/Context'
import Provider from '../components/Provider'

import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './global.css'
import styles from './layout.module.css'

addLocaleData([...it, ...de])

const Layout = ({ children }) => (
  <Provider>
    <Context.Consumer>
      {({ lang }) => (
        <IntlProvider
          locale={lang}
          messages={lang === 'it' ? localIt : localDe}
        >
          {/* <Global lang={lang}> */}
          <>
            <Header />
            <div className={styles.wrapper}>{children}</div>
          </>
          {/* </Global> */}
        </IntlProvider>
      )}
    </Context.Consumer>
  </Provider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// const Global = styled.div`
//   font-family: 'Roboto', sans-serif;
//   ${({ lang }) =>
//     lang === 'ar' &&
//     `
//         font-family: 'Cairo', sans-serif;
//     `}
// `

export default Layout

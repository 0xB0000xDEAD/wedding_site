import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './global.css'
import styles from './layout.module.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.wrapper}>
      {children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

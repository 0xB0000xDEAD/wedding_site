import React from 'react'
import PropTypes from 'prop-types'
import styles from './content.module.css'

const Content = ({ children }) => (
  <section className={styles.wrapper}>
    { children }
  </section>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content

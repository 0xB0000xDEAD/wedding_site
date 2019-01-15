import React from 'react'
import PropTypes from 'prop-types'

import styles from './h1.module.css'
import { css } from 'utils'

const H1 = ({ className, children, ...otherProps }) => (
  <h1
    className={css(
      styles.h1,
      className,
    )}
    {...otherProps}
  >
    { children }
  </h1>
)

H1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H1

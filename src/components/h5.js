import React from 'react'
import PropTypes from 'prop-types'

import styles from './h5.module.css'
import { css } from 'utils'

const H5 = ({ className, children, ...otherProps }) => (
  <h5
    className={css(
      styles.h5,
      className,
    )}
    {...otherProps}
  >
    { children }
  </h5>
)

H5.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H5

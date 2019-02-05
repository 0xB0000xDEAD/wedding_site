import React from 'react'
import PropTypes from 'prop-types'

import styles from './h4.module.css'
import { css } from 'utils'

const H4 = ({ className, children, ...otherProps }) => (
  <h4
    className={css(
      styles.h4,
      className,
    )}
    {...otherProps}
  >
    { children }
  </h4>
)

H4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H4

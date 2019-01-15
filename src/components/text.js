import React from 'react'
import PropTypes from 'prop-types'

import styles from './text.module.css'
import { css } from 'utils'

const TEXT = ({ className, children, ...otherProps }) => (
  <p
    className={css(
      styles.text,
      className,
    )}
    {...otherProps}
  >
    { children }
  </p>
)

TEXT.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TEXT

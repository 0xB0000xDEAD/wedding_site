import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.css'
import { css } from 'utils'

const Button = (props) =>{
  const {
    text,
    className,
    children,
    ...buttonAttributes
  } = props
  return (
    <button
      className={css(styles.button, className)}
      {...buttonAttributes}
    >
      { text || children }
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Button

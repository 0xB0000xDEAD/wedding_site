import React from 'react'
import PropTypes from 'prop-types'

import styles from './form.module.css'
import { css } from 'utils'

const Form = ({ children, className, ...formAttributes }) => (
  <form
    className={css(styles.form, className)}
    {...formAttributes}
  >
    { children }
  </form>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Form

import React from 'react'
import PropTypes from 'prop-types'

import styles from './checkbox.module.css'

class Checkbox extends React.Component {
  state = {
    checked: false,
  }

  _handleChange = ev => {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const {
      label,
      name,
      required,
      multiline,
      style,
      ...otherProps
    } = this.props

    const checkboxAttributes = {
      name,
      required,
      id: name || label,
      ...otherProps,
    }
    return (
      <div className={styles.wrapper} style={style}>
        <label
          className={styles.label}
          required={required}
          htmlFor={checkboxAttributes.id}
        >
          { label }
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={this.state.checked}
            onChange={this._handleChange}
            {...checkboxAttributes}
          />
          <span className={styles.checkmark } />
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
}

export default Checkbox

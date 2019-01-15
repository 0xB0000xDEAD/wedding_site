import React from 'react'
import PropTypes from 'prop-types'

import styles from './input.module.css'

class Input extends React.Component {
  constructor(props) {
    super(props)

    let value = props.value
    if (!value && value !== 0) {
      value = ''
    }

    this.state = {
      value,
    }
  }

  _handleChange = ev => {
    this.setState({ value: ev.target.value })
  }

  render() {
    const {
      label,
      name,
      required,
      multiline,
      type,
      value,
      style,
      onChange,
      disabled,
      ...otherProps
    } = this.props
    const inputAttributes = {
      name,
      type,
      required,
      value: onChange
        ? value
        : this.state.value,
      onChange: onChange || this._handleChange,
      disabled,
      id: name || label,
      ...otherProps,
    }
    return (
      <div className={styles.wrapper} style={style}>
        <label
          className={styles.label}
          required={required}
          htmlFor={inputAttributes.id}
          disabled={disabled}
        >
          { label }
        </label>
        {
          multiline
            ? <textarea
                className={styles.textarea}
                {...inputAttributes}
              />
            : <input
                className={styles.input}
                {...inputAttributes}
              />
        }
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
}

export default Input

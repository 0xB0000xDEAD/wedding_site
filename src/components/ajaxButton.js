import React from 'react'
import PropTypes from 'prop-types'

import styles from './ajaxButton.module.css'
import Button from 'components/button'
import { css } from 'utils'

import { FormattedMessage } from 'react-intl'

/**
 * In part from https://codepen.io/Dannzzor/pen/ivIrE?editors=1010
 */
class AjaxButton extends React.Component {
  _wrapper
  _progressCircle
  _checkmark
  _cross

  constructor(props) {
    super(props)

    this._wrapper = React.createRef()
    this._progressCircle = React.createRef()
    this._checkmark = React.createRef()
    this._cross = React.createRef()
  }

  componentDidUpdate(prevProps) {
    const { isLoading, isSuccess, isFail } = this.props

    if (isLoading && prevProps.isLoading !== isLoading) {
      this._draw(this._progressCircle)
    }

    if (isSuccess && prevProps.isSuccess !== isSuccess) {
      this._draw(this._checkmark)
    }

    if (isFail && prevProps.isFail !== isFail) {
      this._draw(this._cross)
    }

    if (
      (!isSuccess && prevProps.isSuccess !== isSuccess) ||
      (!isFail && prevProps.isFail !== isFail)
    ) {
      this._resetDashes()
    }
  }

  render() {
    const {
      isLoading,
      isSuccess,
      isFail,
      // text = 'Submit',
      type = 'submit',
      ...buttonProps
    } = this.props

    return (
      <div
        ref={this._wrapper}
        className={css(
          styles.wrapper,
          styles.elastic,
          isLoading && styles.loading,
          isSuccess && styles.success,
          isFail && styles.error
        )}
      >
        <Button type={type} {...buttonProps}>
          <span>{<FormattedMessage id="form_submit" />}</span>
        </Button>
        <svg
          ref={this._progressCircle}
          className={styles.progressCircle}
          width="70"
          height="70"
        >
          <path
            d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
            strokeDasharray="204.245 204.245"
            strokeDashoffset="204.245"
          />
        </svg>
        <svg
          ref={this._checkmark}
          className={styles.checkmark}
          width="70"
          height="70"
        >
          <path
            d="m31.5,46.5l15.3,-23.2"
            strokeDasharray="27.80 27.80"
            strokeDashoffset="27.80"
          />
          <path
            d="m31.5,46.5l-8.5,-7.1"
            strokeDasharray="11.7 11.7"
            strokeDashoffset="11.7"
          />
        </svg>
        <svg ref={this._cross} className={styles.cross} width="70" height="70">
          <path d="m35,35l-9.3,-9.3" />
          <path d="m35,35l9.3,9.3" />
          <path d="m35,35l-9.3,9.3" />
          <path d="m35,35l9.3,-9.3" />
        </svg>
      </div>
    )
  }

  _draw = ref => {
    if (!ref) return
    const paths = ref.current.childNodes
    for (let i = 0; i < paths.length; i++) {
      paths[i].style.strokeDashoffset = '0'
    }
  }

  _resetDashes = () => {
    if (this._wrapper.current) {
      const paths = this._wrapper.current.querySelectorAll('path')
      for (let i = 0; i < paths.length; i++) {
        let path = paths[i]
        let length = path.getTotalLength()
        path.style.strokeDasharray = length + ' ' + length
        path.style.strokeDashoffset = length
      }
    }
  }
}

AjaxButton.propTypes = {
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isFail: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
}

export default AjaxButton

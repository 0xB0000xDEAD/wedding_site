import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

import {
  compose,
  withStateHandlers,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose'

// import style from './langLink.module.css'
import { css } from 'utils'
import { FormattedMessage } from 'react-intl'

const LinkLang = ({ selectLanguage, lang, path}) => (
  <li key={Math.random()}>
    <Link
      // to={window.location.pathname}
      to={path}

      onClick={e => {
        switch (lang) {
          case 'it':
            selectLanguage('de')
            // console.log('toggle to de')
            // window.reload()

            break
          case 'de':
            selectLanguage('it')
            // console.log('toggle to en')
            // window.reload()

            break

          default:
            selectLanguage('it')

            break
        }
      }}
    >
      <FormattedMessage id={'switchLanguage'} />
    </Link>
  </li>
)

const enhance = compose(
  withStateHandlers(props => ({ language: props.lang }), {
    selectLanguage: (values, { toggleLanguage }) => value => {
      toggleLanguage(value)
      return {
        language: value,
      }
    },
  })
)

const enhance3 = compose(
  withStateHandlers(props => ({ language: props.lang, path: '/' }), {
    selectLanguage: (values, { toggleLanguage }) => value => {
      toggleLanguage(value)
      return {
        language: value,
      }
    },
    getPath: path => value => ({
      path: value,
    }),
  }),
  lifecycle({
    componentDidMount(props) {
      if (typeof window !== 'undefined') {
        console.log(window.location.pathname)
        this.props.getPath(window.location.pathname)
      } else {
        this.props.getPath('/')

      }
    },
  })
)

export default enhance3(LinkLang)

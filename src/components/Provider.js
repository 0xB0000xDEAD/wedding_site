import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { Context } from './Context'

const Provider = ({ children, lang, toggleLanguage }) => (
  <Context.Provider
    value={{
      lang,
      toggleLanguage: value => toggleLanguage(value),
    }}
  >
    {children}
  </Context.Provider>
)

const enhance = compose(
  withState('lang', 'handleLanguage', 'de'),
  withHandlers({
    toggleLanguage: ({ handleLanguage }) => value => {
      handleLanguage(value)
      localStorage.setItem('lang', value)
    },
  }),
  lifecycle({
    componentDidMount() {
      const localLang = localStorage.getItem('lang')
      console.log(localLang)

      if (localLang || null) {
        this.props.handleLanguage(localLang)
      } else {
        // this.props.handleLanguage(navigator.language.split('-')[0])
        this.props.handleLanguage('it')
      }
    },
  })
)

export default enhance(Provider)

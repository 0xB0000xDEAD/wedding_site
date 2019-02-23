import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './header.module.css'
import styled from 'styled-components'
import { Context } from '../components/Context'
import LangLink from '../components/langLink'
import { FormattedMessage } from 'react-intl'

const pageLinks = [
  {
    name: 'nav_details',
    to: '/details',
  },
  // {
  //   name: 'Invite',
  //   to: '/invite',
  // },
  {
    name: 'nav_rsvp',
    to: '/rsvp',
  },
  // {
  //   name: 'Memento',
  //   to: '/photos',
  // },
  {
    name: 'nav_info',
    to: '/tourist',
  },
]

{
  /* <ul>
        {links.map(({ name, to, ...otherProps }) => (
          <li key={name}>
            <Link activeClassName={styles.activeLi} to={to} {...otherProps}>
              {name}
            </Link>
          </li>
        ))}
        <Trigger />
        <Selector lang={lang} toggleLanguage={toggleLanguage} />
      </ul> */
}

const NavLinks = ({ links }) => (
  <Context.Consumer>
    {({ toggleLanguage, lang }) => (
      <ul>
        {links.map(({ name, to, ...otherProps }) => (
          <li key={name}>
            <Link activeClassName={styles.activeLi} to={to} {...otherProps}>
              <FormattedMessage id={name} />
            </Link>
          </li>
        ))}
        <LangLink lang={lang} toggleLanguage={toggleLanguage} />
      </ul>
    )}
  </Context.Consumer>
)

class Header extends React.Component {
  state = {
    mobileNavActive: false,
  }

  toggleMobileNav = () =>
    this.setState(state => ({ mobileNavActive: !state.mobileNavActive }))

  render() {
    const { mobileNavActive } = this.state
    return (
      <header className={styles.header}>
        <nav className={styles.mobileNavigation}>
          <span
            onClick={this.toggleMobileNav}
            className={styles.mobileNavButton}
          >
            {mobileNavActive ? 'Close' : 'Menu'}
          </span>
          {mobileNavActive && <NavLinks links={pageLinks} />}
        </nav>
        <nav className={styles.mainNavigation}>
          <NavLinks links={pageLinks} />
        </nav>
      </header>
    )
  }
}

// Feel free to move these to a separated styles.js file and import them above

const StyledHeader = styled.div`
  padding: 1rem 0;
  background: #00bcd4;
`
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #fff;
    text-decoration: none;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
  }
`

export default Header

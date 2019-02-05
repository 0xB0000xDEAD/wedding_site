import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './header.module.css'

const pageLinks = [
  {
    name: 'Details',
    to: '/details/',
  },
  // {
  //   name: 'Invite',
  //   to: '/invite/',
  // },
  {
    name: 'rsvp',
    to: '/rsvp',
  },
  // {
  //   name: 'Memento',
  //   to: '/photos/',
  // },
  {
    name: 'tourist info',
    to: '/tourist',
  },
  {
    name: 'Accomodation',
    to: '/accomodation',
  },
]

const NavLinks = ({ links }) => (
  <ul>
    {links.map(({ name, to, ...otherProps }) => (
      <li key={name}>
        <Link activeClassName={styles.activeLi} to={to} {...otherProps}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
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

export default Header

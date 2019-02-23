import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './siteTitle.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FormattedMessage } from 'react-intl'

//webpack import
import Flora from '../images/flora800.png'

const SiteTitle = () => (
  <StaticQuery
    query={graphql`
      {
        flora: file(relativePath: { eq: "flora800.png" }) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      const description = data.site.siteMetadata.description
      return (
        <div className={styles.wrapper}>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          {/* {description && <p className={styles.description}>{description}</p>} */}
          {description && (
            <p className={styles.description}>
              <FormattedMessage id="description" />
            </p>
          )}

          {/* <img src={Flora} /> */}
          <Img fluid={data.flora.childImageSharp.fluid} />
        </div>
      )
    }}
  />
)
export default SiteTitle

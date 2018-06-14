import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Le portier - Gardiennage de clés à Paris"
      meta={[
        { name: 'description', content: 'Gardiennage de clés à Paris' },
        { name: 'keywords', content: 'keyholding, portier, paris, clé, gardiennage' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="group">
      <a href="https://scholar.google.com/citations?user=vaQcF6kAAAAJ&hl=en&oi=sra">Google
        Scholar</a>
      <a href="https://github.com/episodeyang">GitHub</a>
      <a href="https://twitter.com/episodeyang">Twitter</a>
    </nav>
  </header>
  // <header>
  // <div style={{
  //     margin: `0 auto`,
  //     maxWidth: 960,
  //     padding: `1.45rem 1.0875rem`,
  //   }}>
  //     <h1 style={{ margin: 0 }}>
  //       <Link to="/"
  //             style={{
  //               color: `white`,
  //               textDecoration: `none`,
  //             }}>{siteTitle}</Link>
  //     </h1>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

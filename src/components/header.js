import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "./../images/logo.png"

const Header = ({ siteTitle }) => (
  <nav className={`navbar`} role="navigation" aria-label="main navigation">
    <div className={`container`}>
      <div className={`navbar-brand`}>
        <Link className={`navbar-item`} activeClassName={`active`} to="/">
          <img src={logo} alt="logo small" />
        </Link>
      </div>
      <div className={`navbar-menu`}>
        <div className={`navbar-start`}>
          <div className={`navbar-item`}>
            <Link className={``} activeClassName={`active`} to="/">
              Home
            </Link>
          </div>
        </div>
        <div className={`navbar-end`}>
          <div className={`navbar-item`}>
            <Link
              className={`button is-primary is-outlined`}
              activeClassName={`active`}
              to="/contact/"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

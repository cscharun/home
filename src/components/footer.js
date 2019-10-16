import React from "react"

import logo from "./../images/logo-white.png"

const Footer = () => (
  <footer className={`footer has-text-centered`}>
    <div className={`container is-narrow`}>
      <figure className={`image is-48x48 is-inline-block`}>
        <img src={logo} alt="logo white" height="48" />
      </figure>
      <div className={`columns is-centered`}>
        <div className={`column is-one-third`}>
          <h1 className={`title has-text-white is-size-5`}>
            Make the difference
          </h1>
        </div>
      </div>
      <div className={`social-icons`}>
        <a
          className={`button is-medium`}
          href="https://twitter.com/08en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`icon is-small`}>
            <i className={`fab fa-twitter`}></i>
          </span>
        </a>
        <a
          className={`button is-medium`}
          href="https://www.linkedin.com/in/christopher-scharun-8805a713a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`icon is-small`}>
            <i className={`fab fa-linkedin`}></i>
          </span>
        </a>
        <a
          className={`button is-medium`}
          href="https://github.com/08en/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={`icon is-small`}>
            <i className={`fab fa-github`}></i>
          </span>
        </a>
      </div>
      <div className={`copyright`}>This page is handcrafted with ❤ by me</div>
    </div>
  </footer>
)

export default Footer

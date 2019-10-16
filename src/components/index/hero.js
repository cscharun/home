import React from "react"

import Typing from "react-typing-animation"
import logo from "./../../images/logo.png"

const Hero = () => {
  return (
    <section className={`hero has-text-centered is-fullheight-with-navbar`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={`columns is-vcentered is-centered`}>
            <div className={`column is-narrow`}>
              <figure className={`image is-128x128 hero-logo`}>
                <img src={logo} alt="logo big" />
              </figure>
            </div>
            <div className={`column is-narrow has-text-left`}>
              <h1
                className={`title is-size-1-desktop is-size-2-tablet is-size-3-mobile`}
              >
                Christopher Scharun
              </h1>
              <h2
                className={`subtitle hero-subtitle is-size-5-desktop is-size-6-tablet is-size-6-mobile`}
              >
                <Typing ms={50}>
                  <span>Make the difference </span>
                  <Typing.Delay ms={1000} />
                  <span>
                    with microservice architectures, easy to scale out.
                  </span>
                  <Typing.Reset delay={2500} count={1} />
                  <span>with simple building blocks, easy to understand.</span>
                  <Typing.Reset delay={2500} count={1} />
                  <span>with sophisticated sofware systems.</span>
                  <Typing.Delay ms={2500} />
                </Typing>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={`hero-foot is-hidden-touch`}>
        <div className={`container`}>
          <div className={`columns is-centered`}>
            <div className={`column is-narrow`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

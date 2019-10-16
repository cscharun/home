import { Link } from "gatsby"
import React from "react"

const CallToAction = () => {
  return (
    <section className={`section is-medium callout has-text-centered`}>
      <div className={`container`}>
        <div className={`callout`}>
          <div className={`columns is-centered`}>
            <div className={`column`}>
              <h1 className={`title is-spaced`}>
                Interested in collaborating?
              </h1>
              <h2 className={`subtitle is-size-5-desktop`}>
                I’m always open to discuss architectural product designs or
                partnership opportunities.
              </h2>
              <Link
                className={`button is-rounded is-medium is-primary is-outlined`}
                activeClassName={`active`}
                to="/contact/"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

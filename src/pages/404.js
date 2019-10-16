import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <section className={`hero is-fullheight-with-navbar`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={`columns is-centered has-text-centered`}>
            <div className={`column is-full`}>
              <h1
                className={`title has-spacing is-size-3-desktop is-size-3-tablet is-size-3-mobile`}
              >
                404 - Page not found.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "./../images/self.png"

const SubmissionPage = () => (
  <Layout>
    <SEO title="Submission" />
    <section className={`hero is-fullheight-with-navbar`}>
      <div className={`hero-body`}>
        <div className={`container`}>
          <div className={`columns is-centered has-text-centered`}>
            <div className={`column is-full`}>
              <figure className={`avatar image is-128x128`}>
                <img className={`is-rounded`} src={avatar} alt="avatar" />
              </figure>
              <h1
                className={`title has-spacing is-size-3-desktop is-size-3-tablet is-size-3-mobile`}
              >
                Thank you very much!
              </h1>
              <p>I will respond to your request as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SubmissionPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "./../images/self.png"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
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
                Let's get in touch.
              </h1>
            </div>
          </div>
          <div className={`columns`}>
            <div className={`column is-full`}>
              <form
                id="contact"
                acceptCharset="UTF-8"
                action="/submission"
                method="POST"
                netlify-honeypot="_gotcha"
                data-netlify="true"
              >
                <div className={`columns`}>
                  <div className={`column is-half`}>
                    <div className={`field`}>
                      <label className={`label`}>Name</label>
                      <div className={`control is-expanded`}>
                        <input
                          className={`input`}
                          name="name"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`column is-half`}>
                    <div className={`field`}>
                      <label className={`label`}>Email</label>
                      <div className={`control is-expanded`}>
                        <input
                          className={`input`}
                          name="email"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`columns`}>
                  <div className={`column`}>
                    <div className={`field`}>
                      <label className={`label`}>Message</label>
                      <div className={`control is-expanded`}>
                        <textarea
                          className={`textarea`}
                          name="message"
                          rows="5"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className={`field is-hidden`}>
                      <label className={`is-hidden`}></label>
                      <div className={`control is-expanded is-hidden`}>
                        <input
                          className={`is-hidden`}
                          name="_gotcha"
                          type="hidden"
                        />
                        <input type="hidden" name="form-name" value="contact" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`columns is-centered`}>
                  <div className={`column is-one-third`}>
                    <div className={`field`}>
                      <div className={`control`}>
                        <button
                          className={`button is-primary is-outlined is-medium is-fullwidth is-rounded`}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage

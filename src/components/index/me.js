import React from "react"

import avatar from "./../../images/self.png"

const Me = () => {
  return (
    <section
      className={`section is-primary is-medium has-text-centered is-long`}
    >
      <div className={`container`}>
        <div className={`columns is-centered`}>
          <div className={`column is-three-fifths`}>
            <figure className={`avatar has-bottom-spacing image is-128x128`}>
              <img className={`is-rounded`} src={avatar} alt="avatar" />
            </figure>
            <h1
              className={`title is-spaced is-size-3-desktop is-size-4-mobile`}
            >
              Hi, I’m Christopher. Nice to meet you.
            </h1>
            <p className={`text is-white is-size-5-desktop has-text-justified`}>
              I like to design software systems. For 10 years I have been
              working as a full stack developer with hands on experience of
              developing and maintaining web applications. I posess diverse
              experience of creating multiple highly scalable applications using
              different tech stacks. Software development often struggles to
              keep up pace with the speed of business. This challenge places
              high demands on the expandability of software in every phase of
              the lifecycle. For me, this means the creation of loosely coupled
              architectures to <b>make the difference</b> and enable innovation
              processes at every time. For this reason, I design architectures
              according to flexible design patterns and rely on the strength of
              microservices for implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Me

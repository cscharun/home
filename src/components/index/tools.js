import React from "react"

import nodejs from "./../../images/vendors/nodejs.png"
import docker from "./../../images/vendors/docker.png"
import kubernetes from "./../../images/vendors/kubernetes.png"

const Tools = () => {
  return (
    <section className={`section startups has-text-centered is-overlapping`}>
      <div className={`container is-narrow`}>
        <h1
          className={`title has-text-white is-spaced is-size-3-desktop is-size-4-mobile`}
        >
          My preferred tools
        </h1>
        <div className={`tool-boxes`}>
          <div className={`columns level`}>
            <div className={`column level-item`}>
              <div className={`box`}>
                <figure className={`image vendor-logo is-inline-block`}>
                  <img className={`logo`} src={nodejs} alt="logo nodejs" />
                </figure>
                <p className={`has-text-left`}>
                  Thanks to its non-blocking, event-driven I/O model Node.js is
                  one of the best solutions for creating high-performance,
                  real-time web applications. Combined with a microservice-based
                  application, it can handle an extreme amount of load with low
                  response times.
                </p>
              </div>
            </div>
            <div className={`column level-item`}>
              <div className={`box`}>
                <figure className={`image vendor-logo is-inline-block`}>
                  <img src={docker} alt="logo docker" />
                </figure>
                <p className={`has-text-left`}>
                  Microservices are scaled horizontally by starting additional
                  parallel processes. Docker standardizes the operation of
                  microservices by creating a uniformed operating interface
                  independent of technology stacks or operational environments.
                </p>
              </div>
            </div>
            <div className={`column level-item`}>
              <div className={`box`}>
                <figure className={`image vendor-logo is-inline-block`}>
                  <img src={kubernetes} alt="logo kubernetes" />
                </figure>
                <p className={`has-text-left`}>
                  Kubernetes is a container management system and was originally
                  created at Google in 2015. When it comes to orchestration of
                  microservices Kubernetes is the master of dynamically
                  allocating computing resources to fill the demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools

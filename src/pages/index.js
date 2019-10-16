import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroSection from "../components/index/hero"
import MeSection from "../components/index/me"
import ToolsSection from "../components/index/tools"
import CallToActionSection from "../components/index/callToAction"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <MeSection />
    <ToolsSection />
    <CallToActionSection />
  </Layout>
)

export default IndexPage

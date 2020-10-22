import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SplashScreen from "../components/section/splash-screen/splash-screen"
import About from "../components/section/about/about"
import Skills from "../components/section/skills/skills"
import Portfolio from "../components/section/portfolio/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Richard Delbert Tannady" />
     <SplashScreen/>
     <About/>
     <Skills/>
     <Portfolio/>
  </Layout>
)

export default IndexPage

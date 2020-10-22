import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SplashScreen from "../components/splash-screen/splash-screen"
import About from "../components/about/about"
import Skills from "../components/skills/skills"
import Portfolio from "../components/portfolio/portfolio"

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

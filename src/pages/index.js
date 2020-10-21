import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SplashScreen from "../components/splash-screen/splash-screen"
import About from "../components/about/about"
import Skills from "../components/skills/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <SplashScreen/>
     <About/>
     <Skills/>
  </Layout>
)

export default IndexPage

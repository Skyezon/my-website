/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer/footer"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div style={{overflow : "hidden"}}>
      <Header />
      <div className={'container'}>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

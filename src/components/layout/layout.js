/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer"

import Header from "../header"
import "./layout.scss"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {

  return (
    <Container fluid={true}>
      <Header />
      <div className={'container'}>
        <main>{children}</main>
      </div>
      <Footer/>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

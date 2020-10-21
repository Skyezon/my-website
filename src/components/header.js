
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavbarBrand } from "react-bootstrap"
import {Link} from "gatsby"
import Logo from "./logo/logo"

const Header = () => (
  <header>
    <Navbar bg="light" expand="lg" sticky={"top"}>
      <NavbarBrand><Link to={'/'}><Logo/></Link></NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
        <Nav.Link><Link to={'/portfolio'}>PortFolio</Link></Nav.Link>
        <Nav.Link><Link to={'/certificate'}>Certificate</Link></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

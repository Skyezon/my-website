
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavbarBrand } from "react-bootstrap"
import {Link} from "gatsby"
import Logo from "./logo/logo"

const Header = () => (
  <header>
    <Navbar bg="light" expand="lg" sticky={"top"} fixed={"top"}>
      {/*<NavbarBrand><Link to={'/'}><Logo/></Link></NavbarBrand>*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About me</Nav.Link>
          <Nav.Link>My Skills</Nav.Link>
          <Nav.Link>My work</Nav.Link>
          {/*<Nav.Link>Certificate</Nav.Link>*/}
        </Nav>

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

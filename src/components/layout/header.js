
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import ScrollSpy  from "react-scrollspy"


const Header = () => (
  <header>
    <Navbar role={"navigation"} bg="light" expand="lg" fixed={"top"} expand={true}>
      {/*<NavbarBrand><Link to={'/'}><Logo/></Link></NavbarBrand>*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <ScrollSpy className={"d-flex align-items-center mx-auto"} items={['home','about','skills','portfolio']} componentTag={Nav} currentClassName={"active"} >
            <Nav.Link active={false} href={"#home"}>Home</Nav.Link>
            <Nav.Link active={false} href={"#about"} className={"mx-3"}>About me</Nav.Link>
            <Nav.Link active={false} href={"#skills"}>My Skills</Nav.Link>
            <Nav.Link active={false} href={"#portfolio"} className={"ml-3"}>My Works</Nav.Link>
          </ScrollSpy>
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

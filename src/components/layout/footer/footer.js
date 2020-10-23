import React  from "react"
import Style from "./footer.module.scss"
import Social from "./social"
import data from "../../../config/footer.config"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  return(
    <footer className={Style.footer + " d-flex flex-column py-3"}>
      <Row className={"d-flex justify-content-around my-3"}>
          {data.map((item) => Social(item))}
      </Row>
      <div>Richard Delbert © {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
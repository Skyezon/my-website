import React  from "react"
import Style from "./footer.module.scss"
import Social from "./social"
import data from "../../../config/footer.config"
import { Row, Col } from "react-bootstrap"

const Footer = () => {
  return(
    <footer className={Style.footer + " d-flex flex-column justify-content-center align-items-center py-3"}>
      <div className={"d-flex justify-content-around my-3"}>
          {data.map((item) => Social(item))}
      </div>
      <div>Richard Delbert © {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
import React from "react"
import Style from "./social.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "gatsby"
import { Col, Row } from "react-bootstrap"

const Social = (data) => {
  return(
    <Col lg={1} sm={2} className={" mt-3 my-3 mx-4 px-md-2 text-white"}>
      <a target={"_blank"} rel={"noreferrer"} href={data.link} className={Style.social}>
        <FontAwesomeIcon icon={data.icon} name={data.name} title={data.name} />
     </a>
    </Col>
  )
}

export default Social
import React from "react"
import Style from "./social.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Link} from "gatsby"

const Social = (data) => {
  return(
    <a target={"_blank"} rel={"noreferrer"} href={data.link} className={"mt-3"}>
      <div className={Style.social + " m-3 px-2"}>
        <FontAwesomeIcon icon={data.icon} name={data.name} title={data.name} />
      </div>
  </a>

  )
}

export default Social
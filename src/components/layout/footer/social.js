import React from "react"
import Style from "./social.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Social = (data) => {
  return(
    <span className={Style.item + " text-white mx-2"}>
      <a target={"_blank"} rel={"noreferrer"} href={data.link} className={Style.social}>
        <FontAwesomeIcon icon={data.icon} name={data.name} title={data.name} />
      </a>
    </span>
  )
}

export default Social
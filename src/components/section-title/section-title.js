import React from "react"
import Style from "./section-title.module.scss"

const SectionTitle = ({title, color}) => {
  return(
    <div className={Style.sectionTitle}>
      <h2 style={{borderBottom : `solid 8px ${color}`}} className={"px-3"}>{title}</h2>
    </div>
  )
}

export default SectionTitle
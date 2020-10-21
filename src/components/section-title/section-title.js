import React from "react"
import Style from "./section-title.module.scss"

const SectionTitle = ({title, color}) => {
  return(
    <div className={Style.sectionTitle}>
      <h2>{title}</h2>
      <div style={{backgroundColor : color}} className={Style.sectionTitleLine}></div>
    </div>
  )
}

export default SectionTitle
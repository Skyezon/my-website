import React from "react"
import PropTypes from "prop-types"
import Layout from "../layout/layout"
import Style from "./textbox.module.scss"

const TextBox = (props) => {
  return(
    <div className={Style.textbox}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  )
}

Layout.propTypes = {
  title : PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default TextBox
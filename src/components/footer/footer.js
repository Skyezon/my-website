import React  from "react"
import Style from "./footer.module.scss"

const Footer = () => {
  return(
    <footer className={Style.footer}>
     Richard Delbert © {new Date().getFullYear()},
      {/*Built with*/}
      {` `}
      {/*<a href="https://www.gatsbyjs.com">Gatsby</a>*/}
    </footer>
  )
}

export default Footer
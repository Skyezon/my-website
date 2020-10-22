import React  from "react"
import Style from "./footer.module.scss"
import Social from "./social"
import data from "../../config/footer.config"

const Footer = () => {
  return(
    <footer className={Style.footer + " d-flex flex-column py-3"}>
      <div className={"d-flex"}>
        {data.map((item) => Social(item))}
      </div>
      <div>Richard Delbert © {new Date().getFullYear()}</div>

      {/*Built with*/}
      {` `}
      {/*<a href="https://www.gatsbyjs.com">Gatsby</a>*/}
    </footer>
  )
}

export default Footer
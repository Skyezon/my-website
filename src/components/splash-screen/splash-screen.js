import React  from "react"
import Style from "./splash-screen.module.scss"

const SplashScreen = () => {
  return (
    <div className={Style.splashScreen}>
      <div className={Style.pole}></div>
      <div className={'d-flex flex-column'}>
        <div>Hi there, I'm <span style={{borderBottom: "solid 5px #FBBD01", fontWeight:"bold",}}>Richard Delbert</span></div>
        <div>I'm a Web Developer</div>
      </div>
    </div>
  )
}

export default SplashScreen
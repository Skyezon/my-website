import React, { useEffect, useRef } from "react"
import {TimelineLite, Power3, TweenMax} from "gsap"
import Style from "./splash-screen.module.scss"

const SplashScreen = () => {
  let pole = useRef(null)

  let parent = useRef(null)

  let tl = new TimelineLite();
  useEffect(() =>{
    let firstLine = parent.children[0].children[0]
    let name = firstLine.children[0]
    let secondLine = parent.children[1].children[0]


    console.log(firstLine, name, secondLine)

    tl.from(pole,3,{
      width : 0,
      ease : Power3.easeOut
    })
  })

  return (
    <div className={Style.splashScreen}>
      <div ref={el => pole = el} className={Style.pole}></div>
      <div ref={el => parent = el} className={'d-flex flex-column'}>
        <div><div>Hi there, I'm <span style={{borderBottom: "solid 8px #FBBD01", fontWeight:"bold",}}>Richard Delbert</span></div></div>
        <div><div>I'm a <span><span style={{borderBottom : "solid 5px #EB4132"}}>Web Developer</span></span></div></div>
      </div>
    </div>
  )
}

export default SplashScreen
import React, { useEffect, useRef } from "react"
import {gsap, Power3} from "gsap"
import Style from "./splash-screen.module.scss"

const SplashScreen = () => {
  let pole = useRef(null)
  let parent = useRef(null)

  let tl = gsap.timeline();
  useEffect(() =>{
    let firstLine = parent.children[0]
    let name = firstLine
    let secondLine = parent.children[1]
    let job = secondLine.children[0].children[0]


    console.log(firstLine, name, secondLine, job)

    tl.from(pole,{
      duration : 1.5,
      height : 0,
      ease : Power3.easeOut
    })
    tl.from([firstLine.children,secondLine.children],{
      duration : 1,
      x : -2000,
      ease: "circ",
      stagger : .8
    }, "-=0.8")

  })


  return (
    <div id={"home"} className={Style.splashScreen}>
      <div ref={el => pole = el} className={Style.pole}></div>
      <div ref={el => parent = el} style={{paddingLeft: "100px"}} className={'d-flex flex-column pl-5 overflow-hidden'}>
        <div><div>Hi there, I'm <span className={"d-block d-lg-inline"} style={{borderBottom: "solid 5px #FBBD01", width: "fit-content", fontWeight:"bold",}}>Richard Delbert</span></div></div>
        <div><div>I'm a <span><span style={{borderBottom : "solid 5px #EB4132"}}>Web Developer</span></span></div></div>
      </div>
    </div>
  )
}

export default SplashScreen
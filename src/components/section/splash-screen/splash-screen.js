import React, { useEffect, useRef } from "react"
import {gsap, Power3} from "gsap"
import * as Style from "./splash-screen.module.scss"

const SplashScreen = () => {
  let pole = useRef(null)
  let parent = useRef(null)

  let tl = gsap.timeline({css : {
    visibility : "visible",

    }});
  useEffect(() =>{
    let firstLine = parent.children[0]
    let secondLine = parent.children[1]

    gsap.to([pole,parent],{
      css:{
        visibility : "visible"
      }
    })

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
    <div id={"home"} className={Style.splashScreen + " invisible"}>
      <div ref={el => pole = el} className={Style.pole}></div>
      <div ref={el => parent = el} style={{paddingLeft: "100px"}} className={'d-flex flex-column pl-5 overflow-hidden'}>
        <div><div>Hi there, I'm <span className={Style.firstLine + " d-block d-lg-inline"} style={{}}><span>Richard</span> <span>Delbert</span></span></div></div>
        <div><div>I'm a <span><span ><span style={{borderBottom : "solid 5px #EB4132"}}>Web</span> <span style={{borderBottom : "solid 5px #EB4132"}}>Developer</span></span></span></div></div>
      </div>
    </div>
  )
}

export default SplashScreen
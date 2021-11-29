import React, { useEffect, useRef } from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import * as Style from "./about.module.scss"
import Shape from "./shape/shape"
import Section from "../section"
import { data, shapeColor } from "../../../config/about.config"
gsap.registerPlugin(ScrollTrigger)
const About = () => {
  let shapeParent = useRef(null)

  useEffect(() =>{
    const ball1 = shapeParent.children[0];
    const ball2 = shapeParent.children[1];
    const ball3 = shapeParent.children[2];
    const ball4 = shapeParent.children[3];

    gsap.from([ball2,ball1],{
      duration : 3,
      stagger: 1,
      ease : "circular",
      scrollTrigger : {
        trigger : ".balls"
      },
      x : "-90vw",
    })
    gsap.from([ball3,ball4],{
      duration : 3,
      stagger: 1,
      ease : "circular",
      scrollTrigger : {
        trigger : ".balls"
      },
      x : "90vw"
    })

  })

  return (
    <Section id={"about"} title={"About"} color={"#31AA52"} bodyStyle={Style.aboutBody} styling={Style.about}>
      <div className={"d-flex flex-column justify-content-center align-items-center"}>
        <p align={"center"} className={"w-75"}>
          {data.content}
        </p>
        <div className={"d-flex justify-content-center my-3 balls"} ref={el => shapeParent = el}>
          {shapeColor.map((color) => {
            return (
              <Shape width={"20px"} height={"20px"} color={color} shape={"circle"} className={"mx-3"}
                     rotation={"0deg"}/>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default About
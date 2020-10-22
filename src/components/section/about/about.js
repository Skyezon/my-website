import React from "react"
import Style from "./about.module.scss"
import Shape from "./shape/shape"
import Section from "../section"
import { data, shapeColor } from "../../../config/about.config"

const About = () => {
  return (
    <Section id={"about"} title={"About"} color={"#31AA52"} bodyStyle={Style.aboutBody} styling={Style.about}>
      <div className={"d-flex flex-column justify-content-center align-items-center"}>
        <p align={"center"} className={"w-75"}>
          {data.content}
        </p>
        <div className={"d-flex justify-content-center my-3"}>
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
import React from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const Section = ({styling,title,color,children,bodyStyle,id}) => {

  return (
    <div id={id}  className={styling + " my-3 py-4"}>
      <div className={"d-flex justify-content-center"}>
        <div ref={el => judul => el}>
          <h2 style={{borderBottom : `solid 5px ${color}`}} className={"px-3"}>{title}</h2>
        </div>
      </div>
      <div className={bodyStyle + " mt-5"}>
        {children}
      </div>
    </div>
  )
}

export default Section
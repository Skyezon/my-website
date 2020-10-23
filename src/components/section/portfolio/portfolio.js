import React, { useEffect, useState } from "react"
import Section from "../section"
import Style from "./portfolio.module.scss"
import BackgroundImage from "gatsby-background-image"
import data from "../../../config/portfolio.config"
import { Button, Col, Row, Badge } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import {gsap} from "gsap"



const handleActive = (hoverState,activeNumer,activeState,data, setRef) => {
  if (hoverState && (activeNumer === activeState)){
    return <div ref={el => setRef(el)} className={Style.item + " h-100 py-3 px-4 text-center overflow-hidden"}>
      <h3 className={'text-center text-capitalize mb-3'}>{data.title}</h3>
      <div className={"mb-2"}>{data.desc}</div>
      <div className={"d-flex justify-content-around my-3"}>
        {(data.github !== "") ?
          <a rel={"noreferrer"} target={"_blank"} href={data.github}><Button variant={"danger"}>Code repository</Button></a>
          : ""
        }
        {(data.liveProject !== "") ?
          <a rel={"noreferrer"} target={"_blank"} href={data.liveProject}><Button variant={"success"}>Live Demo</Button></a>
          : ""
        }
      </div>
      <div>
        tags :
        {data.tags.map((tag) => {
          return<Badge variant={"secondary"} className={"mx-2"}>  {tag}</Badge>
        })}
      </div>
    </div>
  }

}

const handleAnimation = (ref) =>{
    const kotak = ref
    let tl = gsap.timeline({
      defaults : {
        duration : 1
      }
    })
    tl.from(kotak,{
      duration : .5,
      width : 0,
      visibility : "visible"
    })
      .from(kotak.children[0],{
        y : -100,
        opacity: 0
      },"start")
      .from(kotak.children[1],{
        x : -100,
        opacity : 0
      },"start")
      .from(kotak.children[2].children,{
        opacity : 0,
      },"start")
      .from(kotak.children[3],{
        x : -300,
        opacity : 0
      },"start")
}


const Portfolio = () => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false)
  let someRef
  const setRef = (ref) =>{
    someRef = ref
  }

  useEffect(() =>{
    // handleAnimation()
    if (hover){
      console.log(someRef)
      handleAnimation(someRef)
    }
  })

  const images = useStaticQuery(graphql`
      query AssetsPhotos {
          allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "screenshot"}}) {
              edges {
                  node {
                      name,
                      childImageSharp{
                          fluid(quality: 90, maxWidth: 1920) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  `)
  return(
    <Section id="portfolio" title={"My Works"} color={"#FBBD01"} styling={Style.portfolio} >
      <Row>
        {data.map((item) => {
          let imageNya = null
           images.allFile.edges.forEach((arr) => {
            if (arr.node.name === item.image){
              imageNya = arr.node.childImageSharp.fluid;
            }
          })

            return(
              <Col lg={6}>
                <BackgroundImage fluid={imageNya === null ? null : imageNya} backgroundColor={`#040e18`} className={Style.image + " m-3"}>
                  <div onMouseOver={() => {setHover(true); setActive(item.id)}} onMouseLeave={() => {setHover(false); setActive(0)}} className={"d-flex justify-content-center align-items-center h-100"}>
                    {handleActive(hover,item.id,active,item,setRef)}
                  </div>
                </BackgroundImage>
              </Col>
            )
        })}
      </Row>

    </Section>
  )
}

export default Portfolio
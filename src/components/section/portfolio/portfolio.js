import React, { useState } from "react"
import Section from "../section"
import Style from "./portfolio.module.scss"
import BackgroundImage from "gatsby-background-image"
import data from "../../../config/portfolio.config"
import { Button, Col, Row, Container } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"


const handleActive = (hoverState,activeNumer,activeState,data) => {
  if (hoverState && (activeNumer === activeState)){

    return <Container className={Style.item + " h-100"}>
      <h3 className={'text-center my-4 text-capitalize'}>{data.title}</h3>
      <div className={"mb-2"}>{data.desc}</div>
      <div className={"d-flex justify-content-around my-3"}>
        {(data.github !== "") ?
            <a rel={"noreferrer"} target={"_blank"} href={data.github}><Button variant={"outline-primary"}>Code repository</Button></a>
          : ""
        }
        {(data.liveProject !== "") ?
            <a rel={"noreferrer"} target={"_blank"} href={data.liveProject}><Button variant={"outline-success"}>Live Demo</Button></a>
          : ""
        }
      </div>
      <div>
        tags :
        {data.tags.map((tag) => {
          return<span> {tag} </span>
        })}
      </div>
    </Container>
  }
}

const Portfolio = () => {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false)

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
    <Section id="portfolio" title={"My works"} color={"#FBBD01"} styling={Style.portfolio} >
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
                    {handleActive(hover,item.id,active,item)}
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
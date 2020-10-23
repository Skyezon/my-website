import mortar from "../images/mortarboard.svg"
import desktop from "../images/desktop.svg"
import employee from "../images/employee.svg"

// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"


  // const mortar = useStaticQuery(graphql`
  //     query {
  //         placeholderImage: file(relativePath: { eq: "mortarboard.svg" }) {
  //             childImageSharp {
  //                 fluid(maxWidth: 300) {
  //                     ...GatsbyImageSharpFluid
  //                 }
  //             }
  //         }
  //     }
  // `)
  //
  // const desktop = useStaticQuery(graphql`
  //     query {
  //         placeholderImage: file(relativePath: { eq: "desktop.svg" }) {
  //             childImageSharp {
  //                 fluid(maxWidth: 300) {
  //                     ...GatsbyImageSharpFluid
  //                 }
  //             }
  //         }
  //     }
  // `)
  //
  // const employee = useStaticQuery(graphql`
  //     query {
  //         placeholderImage: file(relativePath: { eq: "employee.svg" }) {
  //             childImageSharp {
  //                 fluid(maxWidth: 300) {
  //                     ...GatsbyImageSharpFluid
  //                 }
  //             }
  //         }
  //     }
  // `)


  const data = [
    {
      'title' : "Learner",
      'content' : `Not gonna lie the fact that I'm still learning right now. I see my self as a life long learner and will always tries new things`,
      "type" : "warning",
      "icon" : mortar
    },
    {
      'title' : "Project Development",
      'content' : `When it comes to project development, skills are needed so for the language or framework that i speak : Laravel / Lumen, SASS, Javascript, React, Gatsby, Java, C, PHP, Kotlin
    `,
      "type" : "primary",
      "icon" : desktop

    },
    {
      'title' : "Professionalism",
      'content' : "My aim for any of the work i done is performance, on time and satifaction. I will make any work done",
      "type" : "success",
      "icon" : employee
    }
  ]

export default data
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as Style from "./logo.scss"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Logo = () => {
  const data = useStaticQuery(graphql`
      query {
          placeholderImage: file(relativePath: { eq: "favicon.png" }) {
              childImageSharp {
                  fluid(maxWidth: 100, quality : 100) {
                      ...GatsbyImageSharpFluid
                  }
                  fixed(width : 50){
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <Img className={Style.logo} fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Logo

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImage = styled(Img)`
  ${props => props.align ? "float: " + props.align : ""}
  ${props => props.width ? "width: " + props.width : ""}
  ${props => props.maxWidth ? "max-width: " + props.maxWidth : ""}
  ${props => props.height ? "height: " + props.height : ""}
  ${props => props.maxHeight ? "max-height: " + props.maxHeight : ""}
  ${props => props.margin ? "margin: " + props.margin : ""}
`

export default function ProfileImage({ ...props }) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pages/images/ge_at_facebook.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} {...props}/>
}


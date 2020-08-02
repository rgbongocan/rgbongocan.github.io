import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./custom.module.css"
import _ from "lodash";

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

const Community = ({svg, href}) => {
    
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allFile {
        edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
          }
      }
    }
  `)
  const {childImageSharp, extension, publicURL} = _.find(data.placeholderImage.edges, edge => edge.node.relativePath === svg).node;
  if (!childImageSharp && extension === "svg") {
    return (
      <a href={href}>
        <img src={publicURL} width="36" className={styles.offWhiteFilter}/>
      </a>
    )
  }
  return <Img fluid={childImageSharp.fluid} />
}

export default Community

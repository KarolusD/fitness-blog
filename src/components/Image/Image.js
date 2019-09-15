/* eslint-disable react/prop-types */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

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

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                  presentationWidth
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      let normalizedProps = props
      if (props.fluid && props.fluid.presentationWidth) {
        normalizedProps = {
          ...props,
          style: {
            ...(props.style || {}),
            maxWidth: props.fluid.presentationWidth,
            margin: '0 auto', // Used to center the image
          },
        }
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return (
        <Img
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
          {...normalizedProps}
          imgStyle={{
            objectFit: 'contain',
          }}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      )
    }}
  />
)

Image.defaultProps = {
  style: {},
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
}

export default Image

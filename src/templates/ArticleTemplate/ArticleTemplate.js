import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Reactmarkdown from 'react-markdown'

export const query = graphql`
  query($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fixed(width: 200, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      date(formatString: "D MMMM YYYY", locale: "PL")
    }
  }
`

const StyledReactMarkdown = styled.div`
  & > h1 {
    color: red;
  }
  & > p {
    color: green;
  }
`

const ArticleTemplate = ({ data }) => {
  return (
    <section>
      <h1>{data.strapiArticle.title}</h1>
      <h3>{data.strapiArticle.date}</h3>
      <Img fixed={data.strapiArticle.image.childImageSharp.fixed} />
      <StyledReactMarkdown>
        <Reactmarkdown
          source={data.strapiArticle.content}
          transformImageUri={uri =>
            uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
        />
      </StyledReactMarkdown>
    </section>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    strapiArticle: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ArticleTemplate

/* eslint-disable react/prop-types */
import React from 'react'
// import styled from 'styled-components'
// import { graphql } from 'gatsby'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
// import Section from 'components/Section/Section'
// import StyledReactMarkdown from 'components/StyledReactMarkdown/StyledReactMarkdown'
// import PostItem from 'components/PostItem/PostItem'
// import { linkResolver } from 'utils/linkResolver'
// import { RichText, Date } from 'prismic-reactjs'
// import formatDate from 'utils/formatDate'

// const ReactMarkdown = require('react-markdown/with-html')

// const ArticleSection = styled(Section)`
//   padding: 120px 10vw;

//   ${({ theme }) => theme.mq.desktop} {
//     padding: 240px 10vw;
//   }
// `

// const StyledPostItem = styled(PostItem)`
//   && {
//     margin-bottom: 32px;
//     pointer-events: none;
//   }
// `

// const FlexWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 680px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
// `

// export const query = graphql`
//   query allPosts($uid: String!) {
//     prismic {
//       allBlogPosts(uid: $uid) {
//         edges {
//           node {
//             _meta {
//               id
//               uid
//               type
//               lang
//             }
//           }
//         }
//       }
//     }
//   }
// `

const ArticleTemplate = ({ data }) => {
  const doc = data.prismic.allBlogPosts.edges.slice(0, 1).pop()
  if (!doc) return null

  return (
    <MainTemplate>
      <div>
        <h1>CHUJ</h1>
      </div>
    </MainTemplate>
  )
}

/* pageTitle={data.prismicBlogPost.uid.replace(/-/g, ' ')} */
/* <ArticleSection height="auto">
  <FlexWrapper>
    <StyledPostItem
      image={
        data.prismicBlogPost.data.image.localFile.childImageSharp.fixed
      }
      alt={data.prismicBlogPost.data.image.alt}
      title={data.prismicBlogPost.data.title.text}
      date={data.prismicBlogPost.data.date}
    />
    <StyledReactMarkdown>
      <ReactMarkdown
        source={data.prismicBlogPost.data.content.html}
        escapeHtml={false}
      />
    </StyledReactMarkdown>
  </FlexWrapper>
</ArticleSection> */
export default ArticleTemplate

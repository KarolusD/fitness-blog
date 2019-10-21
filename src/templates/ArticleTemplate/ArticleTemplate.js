/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import Section from 'components/Section/Section'
import StyledReactMarkdown from 'components/StyledReactMarkdown/StyledReactMarkdown'
import PostItem from 'components/PostItem/PostItem'
import PrevPostLink from 'components/PrevPostLink/PrevPostLink'

const ReactMarkdown = require('react-markdown/with-html')

const ArticleSection = styled(Section)`
  padding: 120px 10vw;

  ${({ theme }) => theme.mq.desktop} {
    padding: 240px 10vw;
  }
`

const StyledPostItem = styled(PostItem)`
  && {
    margin-bottom: 32px;
    pointer-events: none;
    justify-content: flex-start;
  }
`

const FlexWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`

export const query = graphql`
  query($slug: String!) {
    prismicPost(id: { eq: $slug }) {
      id
      uid
      data {
        image {
          url
          alt
          localFile {
            childImageSharp {
              fixed(width: 185, height: 248, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        title {
          text
        }

        date(formatString: "D MMMM YYYY", locale: "pl")
        body {
          ... on PrismicPostBodyContentParagraph {
            primary {
              heading {
                html
              }
            }
          }
          ... on PrismicPostBodyParapraph {
            items {
              content {
                html
              }
            }
          }
        }
      }
    }
  }
`

const ArticleTemplate = ({ data, pageContext }) => {
  const renderContent = data.prismicPost.data.body.map(elem => {
    if (elem.__typename === 'PrismicPostBodyParapraph') {
      return elem.items.map(item => (
        <ReactMarkdown
          key={Math.random()}
          source={item.content.html}
          escapeHtml={false}
        />
      ))
    } else if (elem.__typename === 'PrismicPostBodyContentParagraph') {
      return (
        <ReactMarkdown
          key={Math.random()}
          source={elem.primary.heading.html}
          escapeHtml={false}
        />
      )
    }
  })

  return (
    <MainTemplate
      pageTitle={data.prismicPost.uid.replace(/-/g, ' ')}
      description="siema"
      url={`http://klaudiawolinska.pl/blog/${data.prismicPost.uid}`}
      type="article"
      image={data.prismicPost.data.image.url}
    >
      <ArticleSection height="auto">
        <FlexWrapper>
          <StyledPostItem
            image={data.prismicPost.data.image.localFile.childImageSharp.fixed}
            alt={data.prismicPost.data.image.alt}
            title={data.prismicPost.data.title.text}
            date={data.prismicPost.data.date}
          />
          <StyledReactMarkdown>{renderContent}</StyledReactMarkdown>
          <LinksWrapper>
            <PrevPostLink
              linkTo={
                pageContext.prev ? `/blog/${pageContext.prev.uid}` : undefined
              }
              title={pageContext.prev ? pageContext.prev.data.title.text : null}
              date={pageContext.prev ? pageContext.prev.data.date : null}
              inview={pageContext.prev ? true : false}
            />
            <PrevPostLink
              linkTo={
                pageContext.next ? `/blog/${pageContext.next.uid}` : undefined
              }
              title={pageContext.next ? pageContext.next.data.title.text : null}
              date={pageContext.next ? pageContext.next.data.date : null}
              inview={pageContext.next ? true : false}
              next
              text="następny post"
            />
          </LinksWrapper>
        </FlexWrapper>
      </ArticleSection>
    </MainTemplate>
  )
}

export default ArticleTemplate

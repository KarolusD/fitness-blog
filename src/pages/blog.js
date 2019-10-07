import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import Section from 'components/Section/Section'
import H1 from 'components/H1/H1'
import PostItem from 'components/PostItem/PostItem'
import { linkResolver } from 'utils/linkResolver'
import { RichText, Date } from 'prismic-reactjs'
import formatDate from 'utils/formatDate'
import { withPreview } from 'gatsby-source-prismic-graphql'

const BlogSection = styled(Section)`
  padding: 120px 10vw;

  ${({ theme }) => theme.mq.tablet} {
    padding: 180px 10vw;
  }
`

const StyledH1 = styled(H1)`
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  white-space: nowrap;
  margin-bottom: 80px;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 100px;
  }
`

const PostsList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  max-width: 610px;
  height: auto;
  margin: 0 auto;
  padding: 0;
`

const blogQuery = graphql`
  {
    prismic {
      allBlogPosts(sortBy: meta_lastPublicationDate_DESC) {
        edges {
          node {
            ... on PRISMIC_BlogPost {
              title
              date
              image
              imageSharp {
                childImageSharp {
                  fixed(width: 185, height: 248, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              _meta {
                uid
                id
                type
                lang
              }
            }
          }
        }
      }
    }
  }
`

const blog = () => {
  return (
    <MainTemplate pageTitle="Blog">
      <BlogSection height="auto">
        <StyledH1 content="Wszystkie posty">Wszystkie posty</StyledH1>
        <PostsList>
          <ThemeConsumer>
            {theme => (
              <>
                <StaticQuery
                  query={blogQuery}
                  render={withPreview(
                    data =>
                      data.prismic.allBlogPosts.edges.map(post => (
                        <PostItem
                          key={post.node.id}
                          link
                          to={linkResolver(post.node._meta)}
                          image={post.node.imageSharp.childImageSharp.fixed}
                          alt={post.node.image.alt}
                          title={RichText.asText(post.node.title)}
                          date={formatDate(Date(post.node.date))}
                          arrowDisplay
                          arrowColor={theme.blue}
                          arrowText="czytaj więcej"
                        />
                      )),
                    blogQuery
                  )}
                />
              </>
            )}
          </ThemeConsumer>
        </PostsList>
      </BlogSection>
    </MainTemplate>
  )
}

export default blog

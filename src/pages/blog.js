import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import Section from 'components/Section/Section'
import H1 from 'components/H1/H1'
import PostItem from 'components/PostItem/PostItem'
import ScrollAnimation from 'react-animate-on-scroll'

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
    allPrismicBlogPost(sort: { fields: last_publication_date, order: DESC }) {
      edges {
        node {
          id
          uid
          data {
            date(formatString: "D MMMM YYYY", locale: "pl")
            title {
              text
            }
            image {
              alt
              localFile {
                childImageSharp {
                  fixed(width: 185, height: 248, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
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
        <ScrollAnimation animateIn="fadeInBottom" animateOnce>
          <StyledH1 content="Wszystkie posty">Wszystkie posty</StyledH1>
        </ScrollAnimation>
        <PostsList>
          <ThemeConsumer>
            {theme => (
              <>
                <StaticQuery
                  query={blogQuery}
                  render={blog =>
                    blog.allPrismicBlogPost.edges.map(post => (
                      <PostItem
                        key={post.node.id}
                        link
                        to={`/blog/${post.node.uid}`}
                        image={
                          post.node.data.image.localFile.childImageSharp.fixed
                        }
                        alt={post.node.data.image.alt}
                        title={post.node.data.title.text}
                        date={post.node.data.date}
                        arrowDisplay
                        arrowColor={theme.blue}
                        arrowText="czytaj więcej"
                      />
                    ))
                  }
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

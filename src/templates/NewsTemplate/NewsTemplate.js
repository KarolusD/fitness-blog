import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Link, graphql, StaticQuery } from 'gatsby'
import Section from 'components/Section/Section'
import H1 from 'components/H1/H1'
import ArrowLink from 'components/ArrowLink/ArrowLink'
import Image from 'components/Image/Image'
import PostItem from 'components/PostItem/PostItem'

const NewsSection = styled(Section)`
  padding: 180px 10vw 10vh 10vw;
  height: auto;
  min-height: 640px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 240px 10vw 10vh 10vw;
  }
`

const StyledH1 = styled(H1)`
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  white-space: nowrap;
`

const PostsList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 0;
`

const PostDate = styled.h3`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  letter-spacing: 0.3rem;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.azure};
  margin: 0;
  margin-bottom: 8px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body2};
    margin-bottom: 16px;
  }
`

const PostTitle = styled.h2`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.mobile.h2};
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 16px;
  line-height: 4.2rem;
  transition: all 200ms ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 32px;
    font-size: ${({ theme }) => theme.font.size.desktop.h2};
  }
`

const BlogShortcut = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 510px;
  margin: 0 auto;
  text-decoration: none;

  &:hover {
    .my-blog-title {
      text-decoration: underline;
    }
  }

  .my-blog {
    color: ${({ theme }) => theme.rose};
  }

  .my-blog-image {
    margin-top: 40px;
    position: relative;
    transition: transform 200ms ease-in-out;

    ::before {
      display: none;
      content: '';
      position: absolute;
      top: -16px;
      left: -16px;
      height: 100%;
      width: 100%;
      background: ${({ theme }) => theme.lightRose};
      border-radius: 0 0 80px 80px;
    }

    img {
      border-radius: 2px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    .my-blog-image::before {
      display: block;
    }

    .my-blog-image img {
      border-radius: 0 0 64px 64px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 610px;
  }
`

const newsQuery = graphql`
  {
    allPrismicBlogPost(
      sort: { fields: last_publication_date, order: DESC }
      limit: 2
    ) {
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

const NewsTemplate = () => {
  const themeContext = useContext(ThemeContext)

  return (
    <NewsSection>
      <StyledH1 content="Najnowsze posty">Najnowsze posty</StyledH1>
      <PostsList>
        <StaticQuery
          query={newsQuery}
          render={news =>
            news.allPrismicBlogPost.edges.map(post => (
              <PostItem
                key={post.node.id}
                link
                to={`/blog/${post.node.uid}`}
                image={post.node.data.image.localFile.childImageSharp.fixed}
                alt={post.node.data.image.alt}
                title={post.node.data.title.text}
                date={post.node.data.date}
                arrowDisplay
                arrowColor={themeContext.blue}
                arrowText="czytaj więcej"
              />
            ))
          }
        />
      </PostsList>
      <BlogShortcut as={Link} to="/blog">
        <div className="my-blog-text">
          <PostDate className="my-blog">mój blog</PostDate>
          <PostTitle className="my-blog-title">
            Interesujesz się dietą lub treningiem? Zobacz więcej moich postów
          </PostTitle>
          <ArrowLink
            style={{ pointerEvents: 'none' }}
            text="zobacz blog"
            color={themeContext.pink}
          />
        </div>
        <div className="my-blog-image">
          <Image
            filename="my-blog.png"
            alt="lada kuchenna, na której jest talerz owoców, owsianka z owocami i kawa latte z posypką"
          />
        </div>
      </BlogShortcut>
    </NewsSection>
  )
}

export default NewsTemplate

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import MainTemplate from 'templates/MainTemplate/MainTemplate'

const slugify = require('utils/slugify')

const blog = () => {
  const blogQuery = useStaticQuery(graphql`
    query {
      allStrapiArticle(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            content
            image {
              childImageSharp {
                fixed(width: 175, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date(formatString: "D MMMM YYYY", locale: "PL")
          }
        }
      }
    }
  `)

  return (
    <MainTemplate>
      <section style={{ paddingTop: '200px' }}>
        <p>tutaj będą wszystkie posty i linki do nich</p>
        <ul>
          {blogQuery.allStrapiArticle.edges.map(post => (
            <li key={post.node.id}>
              <h2>
                <Link to={`/blog/${slugify(post.node.title)}`}>
                  {post.node.title}
                </Link>
              </h2>
              <Img fixed={post.node.image.childImageSharp.fixed} />
              <p>{post.node.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </MainTemplate>
  )
}

export default blog

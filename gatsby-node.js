const slugify = require('./src/utils/slugify')

const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(
    './src/templates/ArticleTemplate/ArticleTemplate.js'
  )
  const res = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  res.data.allStrapiArticle.edges.forEach(({ node }) => {
    let pageName = slugify(node.title)
    createPage({
      component: articleTemplate,
      path: `/blog/${pageName}`,
      context: {
        id: node.id,
      },
    })
  })
}

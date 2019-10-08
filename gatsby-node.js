const path = require(`path`)

module.exports.createPages = async ({ reporter, graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(
    './src/templates/ArticleTemplate/ArticleTemplate.js'
  )
  const res = await graphql(`
    query {
      allPrismicBlogPost(sort: { fields: last_publication_date, order: DESC }) {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  if (res.errors) {
    reporter.panic(res.errors)
  }

  res.data.allPrismicBlogPost.edges.forEach(({ node }) => {
    let pageName = node.uid
    createPage({
      component: articleTemplate,
      path: `/blog/${pageName}`,
      context: {
        slug: node.id,
        uid: node.uid,
      },
    })
  })
}

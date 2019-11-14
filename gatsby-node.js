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
            data {
              title {
                text
              }
              date(formatString: "D MMMM YYYY", locale: "pl")
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    reporter.panic(res.errors)
  }

  const posts = res.data.allPrismicBlogPost.edges

  posts.forEach(({ node }, index) => {
    let pageName = node.uid
    createPage({
      component: articleTemplate,
      path: `/blog/${pageName}`,
      context: {
        slug: node.id,
        uid: node.uid,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}

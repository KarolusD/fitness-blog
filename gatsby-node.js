const path = require(`path`)

module.exports.createPages = async ({ reporter, graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(
    './src/templates/ArticleTemplate/ArticleTemplate.js'
  )
  const res = await graphql(`
    query {
      allPrismicPost(sort: { fields: last_publication_date, order: DESC }) {
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

  const posts = res.data.allPrismicPost.edges

  posts.forEach(({ node }, index) => {
    let pageName = node.uid
    createPage({
      component: articleTemplate,
      path: `/blog/${pageName}`,
      context: {
        slug: node.id,
        uid: node.uid,
        next: index === 0 ? null : posts[index - 1].node,
        prev: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}

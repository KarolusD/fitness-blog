// const path = require(`path`)

// module.exports.createPages = async ({ reporter, graphql, actions }) => {
//   const { createPage } = actions
//   const articleTemplate = path.resolve(
//     './src/templates/ArticleTemplate/ArticleTemplate.js'
//   )
//   const res = await graphql(`
//     query {
//       prismic {
//         allBlogPosts(sortBy: meta_lastPublicationDate_DESC) {
//           edges {
//             node {
//               _meta {
//                 id
//                 uid
//                 type
//                 lang
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (res.errors) {
//     reporter.panic(res.errors)
//   }

//   res.data.allPrismicBlogPost.edges.forEach(({ node }) => {
//     let pageName = node._meta.uid
//     createPage({
//       component: articleTemplate,
//       path: `/blog/${pageName}`,
//       context: {
//         slug: node._meta.id,
//         uid: node._meta.uid,
//       },
//     })
//   })
// }

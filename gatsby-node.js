// const path = require("path")

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve("./src/templates/post-template.js")
//   const tagTemplate = path.resolve("./src/templates/tags.js")

//   const {
//     data: {
//       postsRemark: { edges: posts },
//     },
//   } = await graphql(`
//   {
//     postsRemark: allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 2000) {
//       edges {
//         node {
//           frontmatter {
//             tags
//             slug
//           }
//         }
//       }
//     }
//     tagsGroup: allMdx(limit: 2000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//       }
//     }
//   }
  
//   `)
//   posts.forEach(({ node }) => {
//     const { slug } = node.frontmatter
//     createPage({
//       path: slug,
//       component: blogPostTemplate,
//       context: {
//         slug: slug,
//       },
//     })
//   })
// }


const path = require("path")
const _ = require("lodash")
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/post-template.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(`
  {
        postsRemark: allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 2000) {
          edges {
            node {
              frontmatter {
                tags
                slug
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
        tag: Array.isArray(node.frontmatter.tag) && node.frontmatter.tag.length > 0 ? node.frontmatter.tag[0] : ""
      },
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

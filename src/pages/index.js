import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../component/Layout"
import PostList from "../component/PostList"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            author
            authorContact
            date(formatString: "MMMM Do, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
export default () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  return (
    <Layout>
      <PostList posts={posts}/>
    </Layout>
  )
}

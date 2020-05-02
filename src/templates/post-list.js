import React from 'react'
import { Link, graphql } from 'gatsby'

// import SEO from '../components/seo'
// import Bio from '../components/Bio'
import Layout from '../components/Layout'
// import { rhythm } from '../utils/typography
import PostList from "../component/PostList"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location}
        // title={siteTitle}
      >
        {/* <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio /> */}
        {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.slug
          return (
            <div key={node.frontmatter.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.frontmatter.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })} */}
         <PostList posts={posts}/>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: rhythm(1 / 4),
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query blogPageQuery($skip: Int!, $limit: Int!) {
  allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: $limit, skip: $skip) {
    edges {
      node {
        excerpt
        frontmatter {
          slug
          date(formatString: "DD MMMM, YYYY")
          title
        }
      }
    }
  }
}

`




// import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import Layout from "../component/Layout"
// import PostList from "../component/PostList"

// const getPosts = graphql`
//   {
//     allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             slug
//             image {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//             author
//             authorContact
//             date(formatString: "MMMM Do, YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
// export default () => {
//   const response = useStaticQuery(getPosts);
//   const posts = response.allMdx.edges;
//   return (
//     <Layout>
//       <PostList posts={posts}/>
//     </Layout>
//   )
// }

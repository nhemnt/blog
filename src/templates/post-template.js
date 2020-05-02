import React from "react"
import styles from "../css/postTemplate.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../component/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.post.frontmatter
  const { body } = data.post
  const img = image.childImageSharp.fluid

  const { relatedPosts } = data

  return (
    <Layout>
      <section className={styles.template}>
        <Link to="/" className={styles.link}>
          Back to all posts
        </Link>
        <div className={styles.info}>
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <Image fluid={img} />
        <div className={styles.content}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
      <aside className={styles.readNext}>
        {relatedPosts.edges.map(({ node }, i) => (
          <Link
            className={styles.readNextStory}
            style={{
              ...(i % 2 === 1
                ? {
                    borderLeft: "rgba(0,0,100,0.04) 1px solid",
                    boxSizing: "box-shadow",
                  }
                : {}),
            }}
            to={node.frontmatter.slug}
            key={i}
          >
            <section className={styles.post}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.excerpt} »</p>
            </section>
          </Link>
        ))}
      </aside>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!, 
    # $tag: String!
    ) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
    relatedPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      # filter: {frontmatter: {tags:{eq: $tag} }}
      limit: 2
    ) {
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
export default PostTemplate

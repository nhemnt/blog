import React from "react"
import styles from "../css/postcard.module.css"
import { Link } from "gatsby"
import Image from "gatsby-image"

const PostCard = ({ post }) => {
  const { title, date, author, slug, authorContact, tags } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid;

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <h2>
          <Link to={slug} className={styles.postTitle}>
            {title}
          </Link>
        </h2>
      </header>
      <section className={styles.p20}>
        <p>
          {post.excerpt}
          <Link className={styles.readMore} to={slug}>
            »
          </Link>
        </p>
      </section>
      <footer className={styles.postMeta}>
        <Image className={styles.authorThumb} fluid={img} />
        <a href={authorContact} target="blank">
          {author}
        </a>
        {" "}on{" "}
        {tags.map((tag,i) => (
          <Link to={`tags/${tag}`} key={i}>
            {tag}{" "}
          </Link>
        ))}
        {/* <a href="/tag/javascript/">javas</a>,{" "}
      <a href="/tag/react/">react</a> */}
        <time className={styles.postDate}>{date}</time>
      </footer>
    </article>
  )
}

export default PostCard

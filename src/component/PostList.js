import React from "react"
import PostCard from "./PostCard"
import styles from "../css/postlist.module.css"
import { Link } from "gatsby"
const Postlist = ({ posts, tagHeader = "", totalCount = "" }) => {
  return (
    <section className={styles.posts}>
      <header className="main-header no-cover">
        <div className="vertical">
          <div className="main-header-content inner">
            <h1 className="page-title">
              {tagHeader ? tagHeader : "Hemant Negi' Blog"}
            </h1>
            <h2 className="page-description">
              {totalCount
                ? `Collection of ${totalCount} post${
                    totalCount === 1 ? "" : "s"
                  } `
                : "Knowledge is power"}
            </h2>
          </div>
        </div>
      </header>
      <main>
        <div className={styles.center}>
          {tagHeader && <Link className={styles.link} to="/">Back to all post</Link>}
          {posts.map(({ node }, i) => (
            <PostCard key={i} post={node} />
          ))}
        </div>
      </main>
    </section>
  )
}

export default Postlist

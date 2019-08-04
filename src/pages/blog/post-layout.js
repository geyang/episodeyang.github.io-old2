// src/components/blog-post-layout.js
import React from "react"
import Layout from "../../components/layout"

function BlogPostLayout({ children }) {
  return (
    <Layout>
      <article>
        <header>
          <h1>Todo: Main Title Will Go Here</h1>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default BlogPostLayout
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

require(`katex/dist/katex.min.css`)

const IndexPage = ({ children }) => (
  <Layout>{children}</Layout>
)

export default IndexPage

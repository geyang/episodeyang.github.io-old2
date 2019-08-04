import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "./images/profile-image"
import PubList from "../components/publication-list"

require(`katex/dist/katex.min.css`)

const IndexPage = () => (
  <Layout>
    <SEO title="Ge Yang | episodeyang.com"/>
    <ProfileImage width="40%" maxWidth="250px"
                  align="right" margin="0 -40px 10px 20px"/>
    <h1>Ge Yang</h1>
    <p>I am doing my Ph.D. in Physics at the University of Chicago.</p>
    <p>For the past year, I interned at <a href="https://bair.berkeley.edu/">
      Berkeley Artificial Intelligence Research</a> with&nbsp;
      <a href="https://people.eecs.berkeley.edu/~pabbeel/">Pieter Abbeel</a>,
      and the <a href="https://ai.facebook.com/blog/advancing-ai-by-teaching-robots-to-learn/">
        robotics lab
      </a> at Facebook AI Research (FAIR) with&nbsp;
      <a href="https://www.robertocalandra.com/about/">Roberto Calandra</a>.
    </p>
    <p>At the moment I'm interning at Google DeepMind with&nbsp;
      <a href="https://scholar.google.co.uk/citations?user=rLdfJ1gAAAAJ">
        Vlad Mnih
      </a>.</p>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
    <PubList/>
  </Layout>
)

export default IndexPage

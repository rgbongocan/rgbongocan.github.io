import React from "react"

import Layout from "../components/layout"
import Community from "../components/community"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Renzo Bongocan" />
    <h1>Renzo Bongocan</h1>
    <h2>Software Developer</h2>
    <p>High-tech, low-life. Coffee and OCR* on my free time.</p>
    <div style={{
      display: `flex`,
    }}>
      <Community img="github.svg" href="https://github.com/rgbongocan"/>
      <Community img="linkedin.svg" href="https://www.linkedin.com/in/renzo-bongocan"/>
    </div>
    <sub>*pre-pandemic</sub>
  </Layout>
)

export default IndexPage

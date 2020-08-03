import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Community from "../components/community"
import Image from "../components/image"
import SEO from "../components/seo"
import { findLastIndex } from "lodash"

const IndexPage = () => (
  <Layout>
    <SEO title="Renzo Bongocan" />
    <h1>Renzo Bongocan</h1>
    <h2>Software Developer</h2>
    <p>High-tech, low-life. Coffee and OCR* on my free time.</p>
    <div style={{
      display: `flex`,
    }}>
      <Community img="github.svg" href="https://github.com/rgbongocan" style={{marginRight: `0.6rem`}}/>
      <Community img="linkedin.svg" href="https://www.linkedin.com/in/renzo-bongocan"/>
    </div>
    <sub>*pre-pandemic</sub>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Community from "../components/community"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Renzo Bongocan" />
    <h1>Renzo Bongocan</h1>
    <h2>Software Developer</h2>
    <p>High-tech, low-life. Coffee and OCR* on my free time.</p>
    <Community svg="github.svg" href="https://github.com/rgbongocan"/>
    <Community svg="linkedin.svg" href="https://www.linkedin.com/in/renzo-bongocan"/>
  </Layout>
)

export default IndexPage

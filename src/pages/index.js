import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="&Lambda;&Nu;&Rho;&Delta;" />
    <h1>MOAJR</h1>
    <p>New Shopping Experience Under Construction!</p>
    <p>Leonard Tech Assistant</p>
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <br />
    
  </Layout>
)

export default IndexPage

import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Matt Frank James"
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>Hi There.</h1>
        <p>My name is Matt James and I make things on the web.</p>
        <p>
          I've also been know to take photographs, abuse the guitar and play in
          the woods on bikes.
        </p>
      </Layout>
    )
  }
}

export default IndexPage

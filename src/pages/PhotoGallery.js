import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function PhotoGallery({ location, data }) {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Photography Portfolio" />
      <h1>This is the photo page</h1>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

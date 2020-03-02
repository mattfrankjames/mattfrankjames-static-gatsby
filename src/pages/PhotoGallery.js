import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Icon from '../components/Icon';
import { graphql } from 'gatsby';

export default function PhotoGallery({ location, data }) {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Photography Portfolio" />
      <h1>Photo Portfolio In Progress</h1>
      <Icon name="inProgress" label="Page in Progress" />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

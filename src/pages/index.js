import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const HomePage = ({ data, location }) => {
  const siteTitle = 'Matt Frank James';
  return (
    <Layout location={location} title={siteTitle} home>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
      {/* <Img fixed={data.file.childImageSharp.fixed} alt="Portait of Renaya" /> */}
      <ImgWrap>
        <Link to="/DesignGallery">
          <Img
            fluid={data.imageTwo.childImageSharp.fluid}
            imgStyle={{
              transition: 'filter 0.4s ease-out',
              objectPosition: 'center 55px',
              marginBottom: '0',
              marginRight: '0',
              transform: 'rotate(-5deg)',
            }}
            className="card--first"
            alt="Run Bonneville logo"
          />
        </Link>
        <Link to="/PhotoGallery">
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            imgStyle={{
              objectPosition: '-60px 50px',
              transition: 'filter 0.4s ease-out',
              marginBottom: '0',
            }}
            className="card--second"
            alt="Protait of Renaya"
          />
        </Link>
        <Link to="/WebGallery">
          <Img
            className="card--third"
            imgStyle={{
              transition: 'filter 0.4s ease-out',
              marginRight: '1rem',
            }}
            fluid={data.imageThree.childImageSharp.fluid}
            alt="image of react codebase"
          />
        </Link>
        <Link to="/blog">
          <Img
            className="card--fourth"
            fluid={data.imageFour.childImageSharp.fluid}
            imgStyle={{
              transition: 'filter 0.4s ease-out',
            }}
            alt="screen shot of blog post"
          />
        </Link>
      </ImgWrap>
      <contactCard>
        <h2>Hi There.</h2>
        <p>My name is Matt James and I make things on the web.</p>
        <p>
          I've also been know to take photographs, abuse the guitar and play in
          the woods on bikes.
        </p>
      </contactCard>
    </Layout>
  );
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "_DSC1439.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "sample_runbonnevile_logo_2.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "code-bg.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "writing-snap.png" }) {
      ...fluidImage
    }
  }
`;

const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  transition: transform 0.4s ease-out;
  transform: rotate(-5deg) scale(0.95);
  @media (min-width: 1024px) {
    .card--first {
      clip-path: polygon(0 100%, 99% 100%, 100% 33%, 144px 144px);
      height: 100%;
      transition: clip-path 0.4s ease-out;
    }
    .card--second {
      clip-path: polygon(0px 100%, 99% 100%, 117px 58.1%, 0px 25%);
      height: 100%;
      transition: clip-path 0.4s ease-out;
    }
    .card--third {
      clip-path: polygon(0 0, 50% 32%, 100% 65%, 100% 0);
      height: 100%;
      transition: clip-path 0.4s ease-out;
    }
    .card--fourth {
      clip-path: polygon(0 0, 0 68%, 25% 50%, 100% 0);
      height: 100%;
      transition: clip-path 0.4s ease-out;
    }
  }
  @media (any-hover: hover) {
    &:hover {
      transform: rotate(0deg) scale(1);
    }
  }
  img {
    filter: grayscale(70%);
    @media (max-width: 1023px) {
      object-position: center !important;
    }
  }
  a {
    box-shadow: none;
  }
  @media (any-hover: hover) {
    img:hover {
      filter: grayscale(0%);
      clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
    }
    .card--first:hover {
      clip-path: polygon(0 100%, 100% 100%, 100% 33%, 0% 0);
    }
    .card--second:hover {
      clip-path: polygon(0px 100%, 99% 100%, 100% 0%, 0px 25%);
    }
    .card--third:hover {
      clip-path: polygon(0 0, 0 65%, 100% 65%, 100% 0);
    }
    .card--fourth:hover {
      clip-path: polygon(0 0, 0 68%, 100% 65%, 100% 0);
    }
  }
`;
const contactCard = styled.div`
  @media (max-width: 768px) {
    h2 {
      margin-top: 0;
    }
  }
`;
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "code-bg.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's desin changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
export default HomePage;

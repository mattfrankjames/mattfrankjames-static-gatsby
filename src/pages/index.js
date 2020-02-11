import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-link"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = "Matt Frank James"
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
              transition: "filter 0.4s ease-out",
              objectPosition: "center 50px",
              marginBottom: "1rem",
              marginRight: "1rem",
            }}
            className="card--first"
            alt="Run Bonneville logo"
          />
        </Link>
        <Link to="/PhotoGallery">
          <Img
            fluid={data.imageOne.childImageSharp.fluid}
            imgStyle={{
              objectPosition: "-60px 50px",
              transition: "filter 0.4s ease-out",
              marginBottom: "1rem",
            }}
            className="card--second"
            alt="Protait of Renaya"
          />
        </Link>
        <Link to="/WebGallery">
          <Img
            className="card--third"
            imgStyle={{
              transition: "filter 0.4s ease-out",
              marginRight: "1rem",
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
              transition: "filter 0.4s ease-out",
            }}
            alt="screen shot of blog post"
          />
        </Link>
      </ImgWrap>
      <div className="contactCard">
        <h1>Hi There.</h1>
        <p>My name is Matt James and I make things on the web.</p>
        <p>
          I've also been know to take photographs, abuse the guitar and play in
          the woods on bikes.
        </p>
      </div>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
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
`

const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  transform: rotate(-5deg);
  .card--first {
    clip-path: polygon(0 100%, 99% 100%, 100% 33%);
  }
  .card--second {
    clip-path: polygon(0 100%, 99% 100%, 0 36%);
  }
  .card--third {
    clip-path: polygon(0 0, 100% 65%, 100% 0);
  }
  .card--fourth {
    clip-path: polygon(0 0, 0 68%, 100% 0);
  }
  img {
    filter: grayscale(70%);
    &:hover {
      filter: grayscale(0%);
    }
  }
`
// export const query = graphql`
//   query {
//     file(relativePath: { eq: "code-bg.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
export default HomePage

import React from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import { rhythm, scale } from '../utils/typography';

function Layout({ location, title, children, home }) {
  const GlobalStyle = createGlobalStyle`
      body {
        color: #e8e8e8;
        background: black;
      }
    .cls-1,.cls-2{fill:#f1f2f2;}.cls-1,.cls-3,.cls-4,.cls-5{stroke:#231f20;stroke-miterlimit:10;}.cls-3{fill:#fff;}.cls-4{fill:#f3bb3a;}.cls-5{fill:#b3b1b1;}
    .caution {
      width: 95%;
      max-width: 300px;
      margin: 1em auto;
      display: block;
    }
    main h1, main h2, main h3 {
      margin-top: 0 !important; /*this is obviously not ok*/
    }
    `;
  const rootPath = `${__PATH_PREFIX__}/`;
  const blogPath = `${__PATH_PREFIX__}/blog/`;
  let header, mainWrap;

  if (location.pathname === rootPath || location.pathname === blogPath) {
    header = (
      <HeaderInner>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            WebkitTextStroke: `.15px #34e4f6`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to="/"
          >
            {title}
          </Link>
        </h1>
        <Nav>
          <ul>
            <li>
              <Link to="/blog/">Writing</Link>
            </li>
            <li>
              <Link to="/WebGallery/">Web Work</Link>
            </li>
            <li>
              <Link to="/PhotoGallery/">Photography</Link>
            </li>
            <li>
              <Link to="/DesignGallery/">Design</Link>
            </li>
          </ul>
        </Nav>
      </HeaderInner>
    );
  } else {
    header = (
      <HeaderInner>
        <h2
          style={{
            fontFamily: `Holtwood One SC, sans-serif`,
            marginTop: 0,
            WebkitTextStroke: `.15px #34e4f6`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
        <Nav>
          <ul>
            <li>
              <Link to="/blog/">Writing</Link>
            </li>
            <li>
              <Link to="/WebGallery/">Web Work</Link>
            </li>
            <li>
              <Link to="/PhotoGallery/">Photography</Link>
            </li>
            <li>
              <Link to="/DesignGallery/">Design</Link>
            </li>
          </ul>
        </Nav>
      </HeaderInner>
    );
  }
  if (home) {
    mainWrap = (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(42),
          minHeight: `100%`,
          padding: `${rhythm(0)} ${rhythm(3 / 4)} ${rhythm(1.5)}`,
          background: `black`,
        }}
      >
        <Main>{children}</Main>
      </div>
    );
  } else {
    mainWrap = (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          minHeight: `100%`,
          padding: `${rhythm(1)} ${rhythm(3 / 4)} ${rhythm(1.5)}`,
          background: `black`,
        }}
      >
        <main>{children}</main>
      </div>
    );
  }
  return (
    <Wrapper>
      <GlobalStyle />
      <header
        style={{
          padding: `1em 1em .75em`,
        }}
      >
        {header}
      </header>
      {mainWrap}
      <Footer>
        © {new Date().getFullYear()} Matthew James, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  );
}
const Main = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`;
const HeaderInner = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-bottom: 0 !important;
  }
  @media (min-width: 1229px) {
    flex-direction: row;
    h1 {
      margin-right: 1rem;
    }
  }
  @supports (gap: 1rem) {
    gap: 1rem;
    h1 {
      margin-right: 0;
    }
  }
`;
const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.95) 30%
    ),
    url(/code-bg.jpg);
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: auto;
  width: 100%;
  background: black;
  padding: 1rem 0;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  ul {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    /* width: 95%; */

    width: 100%;

    a {
      box-shadow: none;
      font-size: 1.1rem;
      &:hover {
        box-shadow: 0 1px 0 0 currentColor;
      }
    }
    li {
      margin-bottom: 0;
    }
  }
`;

export default Layout;

import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const GlobalStyle = createGlobalStyle`
      body {
        color: #e8e8e8;
        background: black;
      }
    `
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header, mainWrap
    // let main
    // if (location.pathname === rootPath) {
    //   main =(
    //     <main style={{}}>{children}</main>
    //   )
    // }

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <div
          style={{
            width: `95%`,
            maxWidth: `1200px`,
            margin: `0 auto`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
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
            </ul>
          </Nav>
        </div>
      )
    } else {
      header = (
        <div
          style={{
            width: `95%`,
            maxWidth: `1200px`,
            margin: `0 auto`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <h3
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
              to={`/blog/`}
            >
              {title}
            </Link>
          </h3>
          <Nav>
            <ul>
              <li>
                <Link to="/blog/">Writing</Link>
              </li>
            </ul>
          </Nav>
        </div>
      )
    }
    if (this.props.home) {
      mainWrap = (
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(48),
            minHeight: `100%`,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            background: `black`,
          }}
        >
          <main
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridGap: "1rem",
            }}
          >
            {children}
          </main>
        </div>
      )
    } else {
      mainWrap = (
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            minHeight: `100%`,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            background: `black`,
          }}
        >
          <main>{children}</main>
        </div>
      )
    }
    return (
      <Wrapper>
        <GlobalStyle />
        <header
          style={{
            padding: `1em`,
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
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.95) 30%
    ),
    url(/code-bg.jpg);
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px 0;
  width: 100%;
  background: black;
  padding: 1rem 0;
`
const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
`

export default Layout

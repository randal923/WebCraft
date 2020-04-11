import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Menu from "../components/menu"
import Work from "../components/work"
import Video from "../components/video"
import Pacotes from "../components/packages"
import Customers from "../components/customers"

// Images (SVGs)
import ComputerSVG from "../images/computer.svg"
import ArtSVG from "../images/art.svg"

// Icons
import { MdKeyboardArrowRight } from "react-icons/md"

// Style
import styled from "styled-components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Layout>
        <SEO title="Home" />
        <MenuLogo>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
        </MenuLogo>
        <MainHeader>
          <div>
            <img src={ArtSVG} alt="art SVG" />
            <h1>
              Nós criamos produtos <br /> digitais que <span>funcionam</span>
            </h1>
            <button>
              <a href="#">
                CRIE SEU WEBSITE <MdKeyboardArrowRight size={25} />
              </a>
            </button>
          </div>
          <img src={ComputerSVG} alt="Computer SVG" />
        </MainHeader>

        <WhatWeDo>
          <Work />
        </WhatWeDo>
        <Video />
        <Pacotes />
        <Customers />
      </Layout>
    </Container>
  )
}

export default IndexPage

const WhatWeDo = styled.div`
  height: 400px;
`
const Container = styled.div`
  h1 {
    span {
      color: var(--blue);
    }
  }
`
const MainHeader = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  position: relative;

  img:nth-child(2) {
    align-self: center;
    justify-self: center;
    max-width: 600px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    img {
      z-index: -2;
      opacity: 40%;
      position: absolute;
      top: 0;
      left: 50;
      max-width: 600px;
    }
    h1 {
      font-size: 5rem;
    }
    button {
      background: var(--red);
      border: none;
      border-radius: 5px;
      padding: 10px;
      margin-top: 30px;
      width: 200px;
      :hover {
        cursor: pointer;
        background: var(--mainbutton-hover);
      }

      a {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        margin-left: 13px;
      }
    }
  }
`
const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

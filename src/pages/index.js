import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from "../components/header"
import Work from "../components/work.js"

import Packages from "../components/packages"
import Customers from "../components/customers"
import Menu from "../components/menu"
import Stripe from "../components/stripe"
import MainHeader from "../components/mainHeader"

// Style
import styled from "styled-components"

import { breakpoints } from "../components/breakpoints"

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
        <Stripe />
        <MenuLogo>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Menu />
        </MenuLogo>
        <MainHeader />
        <Work />
        <Packages />
      </Layout>
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  h1 {
    span {
      color: var(--blue);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    h1 {
      font-size: 30px;
    }
  }
`
const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0 20px;
`

/*

        <WhatWeDo>
          <Work />
        </WhatWeDo>
        <Video />
        <Pacotes />
        <Customers />
        */

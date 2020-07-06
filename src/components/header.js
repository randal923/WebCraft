import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { breakpoints } from "./breakpoints"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query Images {
      logo: file(relativePath: { eq: "webcraft.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <div>
        <Img fluid={data.logo.childImageSharp.fluid} alt="WebCraft Logo" />
      </div>
      <h1>{siteTitle}</h1>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Container = styled.header`
  display: flex;
  align-items: center;

  h1 {
    margin-top: 14px;
    font-size: 3rem !important;
  }

  div {
    width: 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    div {
      width: 40px;
    }
    h1 {
      margin-top: 12px;
      font-size: 2rem !important;
    }
  }
`

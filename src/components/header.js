import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query Images {
      logo: file(relativePath: { eq: "webcraft.png" }) {
        id
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Img fixed={data.logo.childImageSharp.fixed} alt="WebCraft Logo" />
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
  margin: 30px 0 0 30px;

  h1 {
    margin-top: 22px;
    font-size: 4.5rem;
  }
`

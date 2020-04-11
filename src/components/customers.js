import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Customers = () => {
  const data = useStaticQuery(graphql`
    query logoImages {
      alegria: file(relativePath: { eq: "alegrialogo.png" }) {
        childImageSharp {
          fixed(width: 130) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ark: file(relativePath: { eq: "ark_logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <h1>Clientes</h1>
      <div>
        <Img
          fixed={data.alegria.childImageSharp.fixed}
          alt="Alegria Brinquedos Logo"
        />
        <div className="ark">
          <h2>Ark</h2>
          <Img fixed={data.ark.childImageSharp.fixed} alt="Ark Logo" />
        </div>
      </div>
    </Container>
  )
}

export default Customers

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
  }
  h1 {
    color: var(--gray);
    font-size: 5.5rem;
    margin: 100px 0 80px 0;
  }

  .ark {
    h2 {
      color: var(--gray);
      font-size: 4.5rem;
      margin: 4px;
    }
  }
`

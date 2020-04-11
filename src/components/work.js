import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

// Images (SVGs)
import LinesSVG from "../images/lines.svg"

const Work = () => {
  const data = useStaticQuery(graphql`
    query workImages {
      react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      seo: file(relativePath: { eq: "seo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graph: file(relativePath: { eq: "graph.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pencil: file(relativePath: { eq: "pencil.png" }) {
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
      <div className="images">
        <Img
          fixed={data.react.childImageSharp.fixed}
          alt="React Logo"
          className="react"
        />
        <img src={LinesSVG} alt="what we do" className="lines" />
        <div className="logos">
          <div className="seo">
            <Img fixed={data.seo.childImageSharp.fixed} alt="Seo Logo" />
          </div>
          <div className="graph">
            <Img fixed={data.graph.childImageSharp.fixed} alt="Graph Logo" />
          </div>
          <div className="pencil">
            <Img fixed={data.pencil.childImageSharp.fixed} alt="Pencil Logo" />
          </div>
        </div>

        <Text>
          <div className="graphText">
            <h2>
              Design <br /> Grafico
            </h2>
            <h4>Design Completo</h4>
          </div>
          <div className="seoText">
            <h2>
              Marketing <br /> Digital
            </h2>
            <h4>SEO (Google)</h4>
            <h4>Medias Sociais</h4>
            <h4>Blogs</h4>
          </div>
          <div className="marketingText">
            <h2>
              Desenvolvimento <br /> Web
            </h2>
            <h4>Aplicativos</h4>
            <h4>E-commerce</h4>
            <h4>Websites em Geral</h4>
          </div>
        </Text>
      </div>
    </Container>
  )
}

export default Work

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .images {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .logos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .react {
    margin-bottom: 15px;
    display: inline-block;
    animation: rotation 15s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .seo {
    div {
      position: absolute;
      right: 20px;
    }
  }

  .pencil {
    div {
      position: absolute;
      left: 25px;
    }
  }
`

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  align-items: center;

  h2 {
    margin: 20px 0 15px 0;
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  .graphText {
    position: absolute;
    top: 95%;
    left: 45%;
  }
  .seoText {
    position: absolute;
    left: -40px;
    top: 150px;
  }
  .marketingText {
    position: absolute;
    right: -60px;
    top: 150px;
  }
`

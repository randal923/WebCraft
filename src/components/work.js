import React from "react"
import styled from "styled-components"

import { breakpoints } from "./breakpoints"

// Images (SVGs)
import LinesSVG from "../images/lines.svg"
import reactLogo from "../images/react.svg"
import computerLogo from "../images/computer.svg"
import graphLogo from "../images/graph.svg"
import pencilLogo from "../images/pencil.svg"

const Work = () => {
  return (
    <WhatWeDo>
      <img
        src={reactLogo}
        className="lines"
        alt="React logo"
        className="react"
      />
      <img src={LinesSVG} className="lines" alt="lines img" />
      <Logos>
        <img
          src={pencilLogo}
          className="lines"
          alt="lines img"
          className="pencil"
        />
        <img
          src={graphLogo}
          className="lines"
          alt="lines img"
          className="graph"
        />
        <img
          src={computerLogo}
          className="lines"
          alt="lines img"
          className="computer"
        />
      </Logos>
      <Text>
        <div className="graphText">
          <h2>
            Design <br /> Gráfico
          </h2>
          <h4>
            Design <br /> Completo
          </h4>
        </div>
        <div className="marketingText">
          <h2>
            Marketing <br /> Digital
          </h2>
          <h4>SEO (Google)</h4>
          <h4>Mídias Sociais</h4>
          <h4>Blogs</h4>
        </div>
        <div className="websiteText">
          <h2>
            Criação de <br /> Websites
          </h2>
          <h4>Aplicativos</h4>
          <h4>E-commerce</h4>
          <h4>
            Websites <br /> em Geral
          </h4>
        </div>
      </Text>
    </WhatWeDo>
  )
}

export default Work

const WhatWeDo = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 300px;

  .react {
    width: 50px;
    margin-bottom: 10px;
    animation: rotation 30s infinite linear;
  }

  .lines {
    width: 240px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 60px;
  }

  @media (min-width: ${breakpoints.mediumMobile}) {
    .lines {
      width: 330px;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    .lines {
      width: 500px;
    }
    .react {
      width: 70px;
    }
  }

  @media (min-width: ${breakpoints.wide}) {
    .lines {
      width: 585px;
    }
    .react {
      width: 70px;
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

const Logos = styled.div`
  width: 265px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;

  img {
    width: 30px;
  }

  @media (min-width: ${breakpoints.mediumMobile}) {
    width: 360px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 540px;

    img {
      width: 40px;
    }
  }

  @media (min-width: ${breakpoints.wide}) {
    width: 650px;

    img {
      width: 50px;
    }
  }
`

const Text = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 10px;

  h2 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.1rem;
    margin-top: 5px;
    color: var(--gray);
  }

  .marketingText {
    margin-left: 15px;
  }

  .graphText {
    margin-left: 10px;
  }

  @media (min-width: ${breakpoints.mediumMobile}) {
    width: 390px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: 385px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 570px;

    h2 {
      font-size: 1.6rem;
    }
    h4 {
      font-size: 1.2rem;
    }

    .graphText {
      margin-left: 10px;
    }

    .marketingText {
      margin-left: 20px;
    }
  }

  @media (min-width: ${breakpoints.wide}) {
    width: 700px;
    h2 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
`

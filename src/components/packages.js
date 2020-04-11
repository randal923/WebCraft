import React from "react"
import styled from "styled-components"

// Images (SVGs)
import card1SVG from "../images/card1.svg"
import card2SVG from "../images/card2.svg"
import card3SVG from "../images/card3.svg"

const Video = () => {
  return (
    <Container>
      <h1>Pacotes</h1>
      <div className="cards">
        <div className="card">
          <img src={card1SVG} alt="Pacote Basico" />
          <button className="card-button green">COMPRAR</button>
        </div>
        <div>
          <div className="card">
            <img src={card2SVG} alt="Pacote E-commerce" />
            <button className="card-button blue">COMPRAR</button>
          </div>
        </div>
        <div>
          <div className="card">
            <img src={card3SVG} alt="Pacote Premium" />
            <button className="card-button red">COMPRAR</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Video

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;

  h1 {
    color: var(--gray);
    font-size: 5.5rem;
    margin: 100px 0 80px 0;
  }

  .cards {
    display: flex;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin: 50px;
    }
  }

  .card-button {
    border: none;
    height: 35px;
    width: 135px;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);

    :hover {
      cursor: pointer;
    }
  }
  .green {
    background: var(--green);
    :hover {
      background: var(--green-button-hover);
    }
  }
  .blue {
    background: var(--blue);
    :hover {
      background: var(--blue-button-hover);
    }
  }
  .red {
    background: var(--red);
    :hover {
      background: var(--red-button-hover);
    }
  }
`

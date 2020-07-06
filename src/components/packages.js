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
          <Pacote>
            <TituloCard>Básico</TituloCard>
            <Preco>
              <span>A partir de</span>
              <h3>
                R$ 199 <br /> Por Mês
              </h3>
            </Preco>
            <Lista>
              <h4>Até 4 Páginas</h4>
              <h4>Domínio Próprio</h4>
              <h4>Design Customizádio</h4>
              <h4>
                Otimização de SEO <span>(GOOGLE)</span>
              </h4>
              <h4>Email próprio com assinatura cutomizáda</h4>
            </Lista>
          </Pacote>
          <button className="card-button green">COMPRAR</button>
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
    position: relative;
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

const Pacote = styled.div`
  position: absolute;
  top: 415px;
  left: 52%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TituloCard = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 50px;
`

const Preco = styled.div`
  font-size: 4rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    color: var(--green);
  }

  span {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--green);
  }
`

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.7rem;
  width: 250px;
  margin-top: 80px;
  text-align: center;

  h4 {
    margin-bottom: 60px;
  }
`

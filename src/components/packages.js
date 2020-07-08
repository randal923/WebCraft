import React from "react"
import styled from "styled-components"
import { breakpoints } from "./breakpoints"

// Images (SVGs)
import card1SVG from "../images/card1.svg"
import card2SVG from "../images/card2.svg"
import card3SVG from "../images/card3.svg"

const Packages = () => {
  return (
    <Container>
      <h1>Pacotes</h1>

      <Cards>
        <img src={card1SVG} alt="Pacote Basico" className="card1" />
        <CardBasico>
          <h2>Básico</h2>
          <h3>
            <span>A partir de</span> <br /> R$ 199 <br /> Por Mês
          </h3>
          <ul>
            <li>Ate 4 Páginas</li>
            <li>Dominio Próprio</li>
            <li>Design Customizado</li>
            <li>
              Otimização de SEO <br /> (Google)
            </li>
            <li>Email próprio com assinatura customizada</li>
          </ul>
        </CardBasico>
        <img src={card2SVG} alt="Pacote Basico" className="card2" />
        <CardEcommerce>
          <h2>E-Commerce</h2>
          <h3>
            <span>A partir de</span> <br /> R$ 399 <br /> Por Mês
          </h3>
          <ul>
            <li>Inclui todos os itens do pacote Básico</li>
            <li>Página de Produtos</li>
            <li>Carrinho de Compras</li>
            <li>
              Hospedagem e<br /> Manutenção do Site
            </li>
          </ul>
        </CardEcommerce>
        <img src={card3SVG} alt="Pacote Basico" className="card3" />
        <CardPremium>
          <h2>Premium</h2>
          <h3>
            <span>A partir de</span> <br /> R$ 499 <br /> Por Mes
          </h3>
          <ul>
            <li>Inclui todos os itens do pacote Básico e E-Commerce</li>
            <li>Totalmente cuztomizavel, o que você sonhar, nós fazemos</li>
            <li>
              Perfeito para clientes que querem sites interativos com várias
              integrações
            </li>
          </ul>
        </CardPremium>
      </Cards>
    </Container>
  )
}

export default Packages

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    color: var(--gray);
  }

  @media (min-width: ${breakpoints.mediumMobile}) {
    h1 {
      font-size: 4rem;
    }
  }
`
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: 250px;
    margin-top: 20px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    img {
      margin: 50px;
    }
  }
`
const CardBasico = styled.div`
  position: absolute;
  top: 21px;
  left: 31px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.7rem;
    margin-bottom: 20px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 50px;
    color: var(--green);
    text-align: center;
    font-weight: 400;

    span {
      color: var(--green);
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
  }

  ul {
    li {
      font-size: 1.2rem;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 54px;
    left: 80px;
  }
`

const CardEcommerce = styled.div`
  position: absolute;
  top: 513px;
  left: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 50px;
    color: var(--green);
    text-align: center;
    font-weight: 400;

    span {
      color: var(--green);
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
  }

  ul {
    li {
      font-size: 1.2rem;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 55px;
    left: 429px;
  }
`

const CardPremium = styled.div`
  position: absolute;
  top: 998px;
  left: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.7rem;
    margin-bottom: 20px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 50px;
    color: var(--green);
    text-align: center;
    font-weight: 400;

    span {
      color: var(--green);
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
  }

  ul {
    li {
      font-size: 1.2rem;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 52px;
    left: 780px;
  }
`

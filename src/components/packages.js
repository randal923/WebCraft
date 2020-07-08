import React from "react"
import styled from "styled-components"
import { breakpoints } from "./breakpoints"

// Images (SVGs)
import card1SVG from "../images/card1.svg"
import card2SVG from "../images/card2.svg"
import card3SVG from "../images/card3.svg"

const Packages = () => {
  return (
    <Container id="packages">
      <h1>Pacotes</h1>

      <Cards>
        <img src={card1SVG} alt="Pacote Basico" className="card1" />
        <CardBasico>
          <h2>Básico</h2>
          <h3>
            <span>A partir de</span> <br /> R$ 199 <br /> Por Mês
          </h3>
          <ul>
            <li>Até 4 Páginas</li>
            <li>Domínio Próprio</li>
            <li>Design Customizado</li>
            <li>
              Otimização de SEO <br /> (Google)
            </li>
            <li>Email próprio com assinatura customizada</li>
          </ul>
          <button className="comprarBasico">
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511941337325">
              Comprar
            </a>
          </button>
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
              Hospedagem e<br /> Manutenção do Site*
            </li>
            <li>*Para mais informações, entre em contato</li>
          </ul>
          <button className="comprarEcommerce">
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511941337325">
              Comprar
            </a>
          </button>
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
          <button className="comprarPremium">
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511941337325">
              Comprar
            </a>
          </button>
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

  .comprarBasico {
    background: var(--green);
    border: 0;
    padding: 5px 15px;
    text-transform: uppercase;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
    margin-bottom: 10px;

    :hover,
    :focus {
      cursor: pointer;
      background: var(--green-button-hover);
    }
  }

  .comprarEcommerce {
    background: var(--blue);
    border: 0;
    padding: 5px 15px;
    text-transform: uppercase;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
    margin-bottom: 10px;

    :hover,
    :focus {
      cursor: pointer;
      background: var(--blue-button-hover);
    }
  }
  .comprarPremium {
    background: var(--red);
    border: 0;
    padding: 5px 15px;
    text-transform: uppercase;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
    margin-bottom: 10px;

    :hover,
    :focus {
      cursor: pointer;
      background: var(--red-button-hover);
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
    margin: 20px 0 50px 0;
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
    li:last-child {
      margin-bottom: 60px;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 54px;
    left: 80px;
  }
`

const CardEcommerce = styled.div`
  position: absolute;
  top: 564px;
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
    li:last-child {
      margin-bottom: 105px;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 55px;
    left: 429px;
  }
`

const CardPremium = styled.div`
  position: absolute;
  top: 1100px;
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
    li:last-child {
      margin-bottom: 122px;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 52px;
    left: 780px;
  }
`

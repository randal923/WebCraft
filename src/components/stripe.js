import React from "react"
import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"

import { breakpoints } from "./breakpoints"

const Stripe = () => {
  return (
    <Container>
      <h4>Ganhe 15% off no primeiro mês</h4>
      <h4>Faça seu orçamento já: (11) 94033-4915</h4>
      <button>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511941337325">
          <FaWhatsapp />
          Whatsapp
        </a>
      </button>
    </Container>
  )
}

export default Stripe

const Container = styled.div`
  background: var(--red);
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  width: 100%;
  h4 {
    :nth-child(1) {
      margin-left: 10px;
    }
    :nth-child(2) {
      margin-left: auto;
      margin-right: 10px;
    }
  }

  button {
    background: var(--green);
    border: none;
    border-radius: 3px;
    margin-right: 10px;
    :hover {
      background: var(--whatsapp-hover);
    }
    a {
      padding: 7px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 2px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    h4 {
      :nth-child(1) {
        display: none;
      }
    }
  }
`

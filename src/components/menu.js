import React, { useState } from "react"

// Style
import styled, { css } from "styled-components"

import { breakpoints } from "./breakpoints"

const Menu = () => {
  const [openModal, setOpenModal] = useState(false)

  function handleModal() {
    if (openModal === false) {
      setOpenModal(true)
    } else {
      setOpenModal(false)
    }
  }

  function Menu() {
    return (
      <MenuItems show={openModal}>
        <ul>
          <li>
            <a href="#video" onClick={() => handleModal()}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#packages" onClick={() => handleModal()}>
              Pacotes
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => handleModal()}>
              Contato
            </a>
          </li>
        </ul>
      </MenuItems>
    )
  }
  return (
    <Container>
      <BurgerMenu onClick={() => handleModal()} show={openModal} />
      <Menu />
      <BurgerBackground show={openModal} />
    </Container>
  )
}

export default Menu

const Container = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    svg {
      display: none;
    }
    svg {
      margin: 14px 20px 0 0;
      display: block;
    }
  }
`

const MenuItems = styled.div`
  ul {
    display: flex;
    margin: 14px 20px 0 0;
    li {
      :nth-child(2) {
        margin: 0 10px;
      }
      a {
        font-size: 2rem;
        :hover {
          color: var(--blue);
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    ul {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      z-index: 8;
      align-items: center;
      li {
        margin-bottom: 30px;
        :nth-child(3) {
          margin-top: 30px;
        }
        a {
          font-size: 2rem;
          :hover {
            color: var(--blue);
          }
        }
      }
    }
  }
`

const BurgerMenu = styled.div`
  position: relative;
  margin: 14px 20px 0 0;
  width: 20px;
  height: 2px;
  background: white;
  transition: background 1ms ease-in-out;
  z-index: 6;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: white;
    transition: transform 0.4s ease-in-out;
  }

  ::before {
    transform: translateY(-5px);
  }

  ::after {
    transform: translateY(5px);
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }

  ${props => {
    if (props.show === true) {
      return css`
        background: transparent;
        ::before {
          transform: rotate(45deg);
        }
        ::after {
          transform: rotate(-45deg);
        }
      `
    }
  }}
`

const BurgerBackground = styled.div`
  z-index: 5;
  position: absolute;
  background: black;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: all 0.4s ease;
  opacity: 0;
  position: fixed;

  ${props => {
    if (props.show === true) {
      return css`
        opacity: 100%;
        transform: scale(60);
      `
    }
  }};
`

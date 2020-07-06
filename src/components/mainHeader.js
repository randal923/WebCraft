import React from "react"
import { breakpoints } from "./breakpoints"

// Style
import styled from "styled-components"

// Images (SVGs)
import ComputerSVG from "../images/computerBig.svg"
import ArtSVG from "../images/art.svg"

// Icons
import { MdKeyboardArrowRight } from "react-icons/md"

const MainHeader = () => {
  return (
    <Header>
      <div>
        <img src={ArtSVG} alt="art SVG" className="backgroundIMG" />
        <h1>
          Nós criamos produtos <br /> digitais que <span>funcionam</span>
        </h1>
        <button>
          <a href="#">
            CRIE SEU WEBSITE <MdKeyboardArrowRight size={25} />
          </a>
        </button>
      </div>
      <img src={ComputerSVG} alt="Computer SVG" className="computerIMG" />
    </Header>
  )
}

export default MainHeader

const Header = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  position: relative;

  .computerIMG {
    width: 350px;
  }

  .backgroundIMG {
    width: 300px;
  }

  img:nth-child(2) {
    align-self: center;
    justify-self: center;
    max-width: 600px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;

    img {
      z-index: -2;
      opacity: 40%;
      position: absolute;
      top: 0;
      left: 50;
      max-width: 600px;
    }
    h1 {
      font-size: 5rem;
    }
    button {
      background: var(--red);
      border: none;
      border-radius: 5px;
      padding: 10px;
      margin-top: 30px;
      width: 200px;
      :hover {
        cursor: pointer;
        background: var(--mainbutton-hover);
      }

      a {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        margin-left: 13px;
      }
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    .computerIMG {
      width: 450px;
    }

    .backgroundIMG {
      width: 400px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px;

    img:nth-child(2) {
      display: none;
    }

    div {
      h1 {
        font-size: 2rem;
      }

      img {
        max-width: 200px;
        top: -30%;
      }

      button {
        background: var(--red);
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin-top: 30px;
        width: 130px;
        :hover {
          cursor: pointer;
          background: var(--mainbutton-hover);
        }

        a {
          display: flex;
          align-items: center;
          font-size: 1rem;
          margin-left: 13px;
        }
      }
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.wide}) {
    div {
      h1 {
        font-size: 3rem;
      }
    }
  }
`

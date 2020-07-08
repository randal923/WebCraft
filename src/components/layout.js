import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

// Style
import styled from "styled-components"

// Components
import Header from "./header"

// Icons
import { TiPencil } from "react-icons/ti"
import { GiSmartphone } from "react-icons/gi"

const Layout = ({ children }) => {
  const red = "#b94a4d"
  return (
    <>
      <Container>
        <main>{children}</main>
        <Footer id="footer">
          <h2 className="projeto">Tem um projeto em mente?</h2>
          <h2 className="contato">Fale Conosco</h2>
          <div className="contact">
            <div className="write">
              <GiSmartphone size={35} fill={red} />
              <h3>Nos Ligue</h3>
              <p>(11) 94033-4915</p>
            </div>
            <div>
              <TiPencil size={35} fill={red} />
              <h3>Nos Escreva</h3>
              <p>info@webcraft.com</p>
            </div>
          </div>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div``

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  margin-top: 50px;

  .projeto {
    font-size: 2.6rem;
    margin: 60px 0 20px 55px;
  }

  .contato {
    font-size: 2.3rem;
    margin: 0 0 20px 55px;
  }
  h3 {
    font-size: 1.4rem;
    margin: 5px;
  }

  p {
    font-size: 1.2rem;
    color: var(--gray);
  }

  .contact {
    display: flex;
    margin: 10px 45px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      svg {
        margin: 10px;
      }
    }
  }
`

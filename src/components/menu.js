import React from "react"

// Style
import styled from "styled-components"

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Pacotes</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </Container>
  )
}

export default Menu

const Container = styled.div`
  ul {
    display: flex;
    margin: 16px 50px 5px 5px;
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
`

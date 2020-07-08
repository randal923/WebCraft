import React from "react"
import styled from "styled-components"
import { breakpoints } from "./breakpoints"

const VideoComponent = () => {
  return (
    <Container id="video">
      <iframe
        src="https://www.youtube.com/embed/nJTsbZojero?controls=0&amp;start=4&autoplay=1&loop=1"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Container>
  )
}

export default VideoComponent

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    height: 800px;
    width: 80%;
  }
`

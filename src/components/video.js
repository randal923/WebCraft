import React from "react"
import styled from "styled-components"

const VideoComponent = () => {
  return (
    <Container>
      <iframe
        width="727"
        height="409"
        src="https://www.youtube.com/embed/yykSz3WOzTE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture autoplay"
        allowfullscreen
      ></iframe>
    </Container>
  )
}

export default VideoComponent

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 100px 0;
`

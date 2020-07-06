import React from "react"
import styled from "styled-components"
import { Player } from "video-react"

const VideoComponent = () => {
  return (
    <Container>
      <video width="800" controls>
        <source src="../images/showreel.mp4" type="video/mp4"></source>
      </video>
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

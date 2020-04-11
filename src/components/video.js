import React from "react"
import styled from "styled-components"

const Video = () => {
  return (
    <Container>
      <video width="80%" height="800px" controls>
        <source src="./images/showreel.mp4" type="video/mp4" />
      </video>
    </Container>
  )
}

export default Video

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

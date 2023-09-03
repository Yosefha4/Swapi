/* eslint-disable no-unused-vars */
import { useState } from "react"
import { styled } from "styled-components"


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Auth = () => {
    const [authMood,setAuthMood] = useState(false)
  return (
    <Container>
        Auth
    </Container>
  )
}

export default Auth
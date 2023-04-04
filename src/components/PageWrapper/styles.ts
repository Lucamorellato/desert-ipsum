import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${props => props.theme.background};
  transition: background ${props => props.theme.transition};
  min-height: 100vh;
  padding-top: 50px;
  justify-content:center;  
  
  :before {
    content: "",
    position: absolute;
    bottom: 0;
    width: 100vw;
  }

  i {
    position: absolute;
    background: ${props => props.theme.starColor};
    border-radius: 50%;
    box-shadow: 0 0 10px #fff,0 0 20px ${props => props.theme.primary},0 0 40px #fff,0 0 80px ${props => props.theme.primary};
    animation: animate linear infinite;
    transition: background ${props => props.theme.transition};
    z-index: 0;
  }

  @keyframes animate {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0
    }
  }
`
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 100px;
  padding: 0 20px;
  z-index: 1;
  position:relative;
`

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 3rem;
  line-height:90%;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align:left;
  font-weight: 800;
  width: 225px;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.textColor};
  transition: color ${props => props.theme.transition};
  margin-bottom: 50px;
`

export const Subtitle = styled.p`
  font-size: 1.75rem;
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.textColor};
  transition: color ${props => props.theme.transition};
  margin: 0;

  @media (max-width: ${props => props.theme.mediaQuery}px) {
    font-size: 1.5rem;
  }
`
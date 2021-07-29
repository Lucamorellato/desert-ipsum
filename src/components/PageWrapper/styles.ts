import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: ${props => props.theme.background};
  transition: background ${props => props.theme.transition};
  min-height: 100vh;
  padding-top: 50px;
`
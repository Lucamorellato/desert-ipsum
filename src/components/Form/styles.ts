import styled, { keyframes, css } from 'styled-components'

interface InputProps {
  isMute: boolean
}
  
export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position:relative;
  flex-direction: row;
  margin-bottom: 70px;

  @media (max-width: ${props => props.theme.mediaQuery}px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  p {
    font-size: 1rem;
    font-weight: 700;
  }
`

export const Input = styled.input`
  display: block;
  background:transparent;
  height: 20px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 250px;
  transition: box-shadow ${props => props.theme.transition};

  :focus {
    outline: none;
  }
  &:active {
    ::-webkit-slider-thumb {
      background: white;
    }
  }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: ${props => props.theme.primary};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.black};
    transition: background ${props => props.theme.transition}, box-shadow ${props => props.theme.transition};
    box-shadow: rgb(0 0 0 / 20%) 0px 2px, rgb(0 0 0 / 10%) 0px 3px, rgb(0 0 0 / 10%) 0px 4px
  }
  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 3px ${props => props.theme.black};
    border: 2px solid ${props => props.theme.black};
    height: 20px; 
    width: 15px;
    border-radius: 5px;
    background: #FFFFFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
    transition: background ${props => props.theme.transition};
  }
  :focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.primary};
  }
  ::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px${props => props.theme.black};
    background: ${props => props.theme.primary};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.black};
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 3px ${props => props.theme.black};
    border: 2px solid ${props => props.theme.black};
    height: 25px;
    width: 20px;
    border-radius: 5px;
    background: #FFFFFF;
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.black};
    border-radius: 10px;
    box-shadow: 1px 1px 1px ${props => props.theme.black};
  }
  ::-ms-fill-upper {
    background: ${props => props.theme.black};
    border: 1px solid ${props => props.theme.black};
    border-radius: 10px;
    box-shadow: 1px 1px 1px ${props => props.theme.black};
  }
  ::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 3px ${props => props.theme.black};
    border: 2px solid ${props => props.theme.black};
    height: 25px;
    width: 20px;
    border-radius: 5px;
    background: #FFFFFF;
    cursor: pointer;
  }
  :focus::-ms-fill-lower {
    background: ${props => props.theme.primary};
  }
  :focus::-ms-fill-upper {
    background: ${props => props.theme.primary};
  }
`;

export const RangeContainer = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  p {
    margin: 0;
    padding: 0;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.background};
  font-size: 0.8rem;
  margin-left: 50px;
  font-family: ${props => props.theme.font};
  transition: color ${props => props.theme.transition}, background ${props => props.theme.transition}, box-shadow ${props => props.theme.transition};
  padding: 10px 15px;
  letter-spacing: .3px;
  font-weight:bold;
  border-radius: 5px;
  cursor: pointer;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  border: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  box-shadow: ${props => (props.theme.boxShadhow)};
  &:hover {
    opacity: 0.9;
  }
  &:active {
    margin-top: 2px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px, rgb(0 0 0 / 10%) -1px 3px, rgb(0 0 0 / 10%) -2px 4px;
  }

  @media (max-width: ${props => props.theme.mediaQuery}px) {
    margin: 0;
  }
`;

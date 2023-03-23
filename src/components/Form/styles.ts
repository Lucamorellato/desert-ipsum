import styled, { keyframes, css } from 'styled-components'

interface InputProps {
    isMute: boolean
}
  
export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position:relative;
`;

export const Label = styled.label`
  span {
    opacity: 0;
  }
`

export const Input = styled.input`
  background:transparent;
  height: 20px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 250px

:focus {
  outline: none;
}
&:active {
  ::-webkit-slider-thumb {
    background: ${props => props.theme.grey};
  }
}
::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: ${props => props.theme.primary};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.black};
  transition: background ${props => props.theme.transition};

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

export const Button = styled.button`
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.background};
  font-size: 0.8rem;
  font-family: ${props => props.theme.font};
  transition: all ${props => props.theme.transition};
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
  &:hover {
    opacity: 0.9;
  }
  &:active {
    margin-top: 1px;
    opacity: 1;
  }
`;

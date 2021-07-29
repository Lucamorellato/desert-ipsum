import styled, { keyframes, css } from 'styled-components'

interface InputProps {
    isMute: boolean
}
  
export const Form = styled.form`
  width: 50%;
  margin: 0 auto;
`;

export const Label = styled.label`
  span {
    opacity: 0;
  }
`

export const Input = styled.input`
  background:transparent;
  height: 34px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;

:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000;
  background: ${props => props.theme.textColor};
  border-radius: 5px;
  border: 1px solid #000000;
  transition: background ${props => props.theme.transition};

}
::-webkit-slider-thumb {
  box-shadow: 1px 1px 3px #000000;
  border: 2px solid #000000;
  height: 25px;
  width: 20px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9px;
}
:focus::-webkit-slider-runnable-track {
  background: ${props => props.theme.textColor};
}
::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000;
  background: ${props => props.theme.textColor};
  border-radius: 5px;
  border: 1px solid #000000;
}
::-moz-range-thumb {
  box-shadow: 1px 1px 3px #000000;
  border: 2px solid #000000;
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
  background: #3071A9;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
::-ms-fill-upper {
  background: #3071A9;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}
::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 3px #000000;
  border: 2px solid #000000;
  height: 25px;
  width: 20px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}
:focus::-ms-fill-lower {
  background: #3071A9;
}
:focus::-ms-fill-upper {
  background: #3071A9;
}
`;

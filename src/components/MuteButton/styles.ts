import styled, { keyframes, css } from 'styled-components'

interface ButtonProps {
    isMute: boolean
}
  
export const shake = keyframes`
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
  
    69% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }
    
    70%, 99% {
      transform: translate3d(-2px, 0, 0) rotate(2deg);
      opacity: 0.5;
    }
  
    72%, 95% {
      transform: translate3d(1px, 0, 0) rotate(-2deg);
    }
    80%, 90%{
      transform: translate3d(-2px, 0, 0));
      
    }

    85%, 92% {
      transform: translate3d(2x, 0, 0));
      opacity: 1;
    }

    83%, 88% {
      transform: translate3d(1px, 0, 0) rotateX(-2deg);
      opacity: 0.5;
    }
`
  
export const StyledButton = styled.button<ButtonProps>`
    position: absolute;
    right: 70px;
    top: 25px;
    height: 40px;
    width: 40px;
    display: inline-block;
    z-index: 100;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 100;
    padding: 0;
    animation: ${props =>
      props.isMute === true
        ? css`
            ${shake} 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite
          `
        : ``};
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  
    &:hover {
      animation: '';
    }
`
  
export const SpeakerDiv = styled.div<ButtonProps>`
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
  
    span {
      display: block;
      position: absolute;
      width: 10px;
      height: 12px;
      background: ${props => props.theme.textColor};
      left: -13px;
      top: -7px;
      border-radius: 2px 0 0 2px;
      opacity: ${props => (props.isMute === true ? `0.5` : `1`)};
      transition: all ${props => props.theme.transition};
  
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent ${props => props.theme.textColor} transparent
          transparent;
        border-width: 12px 16px 12px 16px;
        left: -14px;
        top: -6px;
        transition: border ${props => props.theme.transition};
        border-radius: 3px;
      }
  
      &:before {
        transform: rotate(45deg);
        border-radius: 0 50px 0 0;
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-style: double;
        border-color: ${props => props.theme.textColor};
        border-width: 7px 7px 0 0;
        left: 18px;
        top: 0px;
        transition: all ${props => props.theme.transition};
        opacity: ${props => (props.isMute === true ? `0` : `1`)};
        transform: scale(1) translate(0, 0) rotate(42deg);
      }
    }
  
    &:hover {
      span:before {
        opacity: 1;
      }
    }
`
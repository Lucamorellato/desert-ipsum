import React from 'react'
import styled, { keyframes } from 'styled-components'

interface DarkModeButtonProps {
  isDark: boolean
  onClick: () => void
}

interface SwitchProps {
  isDark: boolean
}

const Switch = styled.div<SwitchProps>`
  position: absolute;

  top: 50%;  /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  width: 48px;
  height: 48px;
  transform:translate(-50%, -50%) ${props =>
    props.isDark ? `rotate(90deg)` : `rotate(0deg)`};
  transition: transform ${props => props.theme.transitionLong};
 

  &::before {
    width:  ${props => (props.isDark ? `22px` : `5px`)};
    height:  ${props => (props.isDark ? `22px` : `5px`)};
    /* width: 22px;
    height:22px; */
    background: ${props => props.theme.black};
    opacity:  ${props => (props.isDark ? `1` : `0`)};
    position: relative;
    transition: width ${props => props.theme.transitionLong}, height ${props =>
  props.theme.transitionLong}, opacity ${props => props.theme.transition} ;
    /* transition-delay: 0.2s; */

    border-radius:50%;
    left: 5px;
    top:20px;
    z-index: 100;
    content: "";
    display: block;
}
  }

  span {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: ${props => (props.isDark ? `80%` : `65%`)};
    height: ${props => (props.isDark ? `80%` : `65%`)};
    background: ${props => props.theme.textColor};
    border: 4px solid ${props => props.theme.background};
    transition: all ${props => props.theme.transition};
  }
  div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  /* the rays of the sun */
  div:before,
  div:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.textColor};
    width: 7%;
    height: ${props => (props.isDark ? `50%` : `80%`)};
    border-radius: 50px;
    transition: background ${props => props.theme.transitionLong},
      height ${props => props.theme.transitionLong};
  }
  div:nth-child(1):before {
    transform: translate(-50%, -50%) rotate(0deg);
    height: ${props => (props.isDark ? `50%` : `83%`)};
    width: 9%;
  }

  div:nth-child(1):after {
    transform: translate(-50%, -50%) rotate(45deg); /*45deg increment each time*/
  }

  div:nth-child(2):before {
    transform: translate(-50%, -50%) rotate(90deg);
    height: ${props => (props.isDark ? `50%` : `82%`)};
    width: 9%;

    
  }

  div:nth-child(2):after {
    transform: translate(-50%, -50%) rotate(135deg);
  }
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(0px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(0px, 0, 0);
  }
`

const StyledButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  background: transparent;
  border: none;
  outline: none;
  height: 35px;
  width: 35px;
  padding: 0;
  cursor: pointer;
  z-index: 100;

  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`

const MoonRays = styled.article`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: pink;
  z-index: 200;
  /* the rays of the sun */
  &:before,
  :after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: red;
    width: 7%;
    height: 85%;
    border-radius: 50px;
    transition: background ${props => props.theme.transitionLong},
      height ${props => props.theme.transitionLong};
  }
  &:before {
    transform: translate(450%, -100%) rotate(45deg);
  }
`

export default ({ isDark, onClick }: DarkModeButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      aria-label={
        isDark
          ? 'click to switch to day mode'
          : 'click to switch to night mode '
      }
    >
      <Switch isDark={isDark}>
        <div></div>
        <div></div>
        <span></span>
        {isDark && <MoonRays />}
      </Switch>
    </StyledButton>
  )
}

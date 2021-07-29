import React from 'react'
import { StyledButton, Switch } from './styles'

interface DarkModeButtonProps {
  isDark: boolean
  onClick: () => void
}

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
      </Switch>
    </StyledButton>
  )
}

import React from 'react'
import { StyledButton, SpeakerDiv } from './styles'

interface MuteButtonProps {
  isMute: boolean
  onClick: () => void
}

export default ({ isMute, onClick }: MuteButtonProps) => {
  return (
    <StyledButton onClick={onClick} isMute={isMute}>
      <SpeakerDiv
        isMute={isMute}
        aria-label={isMute ? 'click to mute audio' : 'click to unmute audio'}
      >
        <span></span>
      </SpeakerDiv>
    </StyledButton>
  )
}

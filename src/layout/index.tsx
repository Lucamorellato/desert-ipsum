import React, { ReactChild, useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import useSound from 'use-sound'
import click from '../../static/assets/click.mp3'
import mute from '../../static/assets/mute.mp3'
import soundscape from '../../static/assets/redblueblacksilver.mp3'

import { themesObj } from '../styles/theme'
import GlobalStyles from '../styles/globalStyles'
import Head from '../components/Head'
import DarkModeButton from '../components/DarkModeButton'
import MuteButton from '../components/MuteButton'

interface ILayoutProps {
  children: ReactChild
  location: {
    pathname: string
  }
}

export default ({ children, location }: ILayoutProps) => {
  const [isDark, setIsDark] = useState(false)
  const [isMute, setIsMute] = useState(true)
  const [toggleSwitch] = useSound(click, { volume: 0.4 })
  const [muteSwitch] = useSound(mute, { volume: 0.4 })
  const [playSoundscape, { stop }] = useSound(soundscape, {
    volume: 0.9,
    interrupt: true,
  })

  // on mount, if user prefers darkmode, show dark mode
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? setIsDark(true)
      : setIsDark(false)
  }, [])

  // watches isMute variable to loop song (soundscape.mp3).
  useEffect(() => {
    isMute === true ? stop() : playSoundscape()
    let loop: any
    if (!isMute) {
      loop = setInterval(() => {
        playSoundscape()
      }, 24000)
    }
    return function cleanup() {
      clearInterval(loop)
    }
  }, [isMute])

  // toggle isMute, and if !isMute play the muteSwitch sound on click
  const handleToggleIsMute = () => {
    muteSwitch()
    setIsMute(!isMute)
  }

  // toggle IsDark, and if !isMute play toggleSwtich sound on click
  const handleToggleIsDark = () => {
    setIsDark(!isDark)
    !isMute ? toggleSwitch() : mute
  }

  return (
    <>
      <GlobalStyles />
      <Head pathname={location.pathname} />
      <ThemeProvider theme={isDark ? themesObj.dark : themesObj.light}>
        <DarkModeButton isDark={isDark} onClick={handleToggleIsDark} />
        <MuteButton isMute={isMute} onClick={handleToggleIsMute} />
        {children}
      </ThemeProvider>
    </>
  )
}

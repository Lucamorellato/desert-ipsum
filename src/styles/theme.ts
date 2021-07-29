export type ThemeType = typeof light // This is the type definition for my theme object.

const colors = {
  primary: '#f9d441',
  black: '#131616',
  white: '#FAFFFD',
  green: '#52796F',
  offwhite: '#fcfae6',
}

export const light = {
  name: 'light',
  headingFont: `"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;`,
  bodyFont: 'Times New Roman',
  transition: '0.2s cubic-bezier(0.25, 1, 0.5, 1);',
  transitionLong: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  black: colors.black,
  white: colors.offwhite,
  green: colors.green,
  textColor: colors.black,
  background: colors.primary,
  backgroundDivColor: colors.offwhite,
}

export const dark: ThemeType = {
  ...light,
  name: 'dark',
  textColor: colors.primary,
  background: colors.black,
  backgroundDivColor: 'transparent',
}

export const themesObj = { light, dark }

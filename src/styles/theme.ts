export type ThemeType = typeof light // This is the type definition for my theme object.

const colors = {
  primary: '#f9d441',
  black: '#131616',
  white: '#FAFFFD',
  grey: '#303030',
  offGrey: '#3030308C',
  offwhite: '#ffffff8C',
}

export const light = {
  name: 'light',
  font: `"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;`,
  transition: '0.2s cubic-bezier(0.25, 1, 0.5, 1);',
  transitionLong: '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  black: colors.black,
  white: colors.offwhite,
  grey: colors.grey,
  primary: colors.primary,
  textColor: colors.black,
  background: colors.primary,
  backgroundDivColor: colors.offwhite,
  boxShadhow: "rgb(0 0 0 / 20%) -2px 4px, rgb(0 0 0 / 10%) -5px 6px, rgb(0 0 0 / 10%) -8px 8px",
  mediaQuery: 800,
  starColor: colors.primary,
}

export const dark: ThemeType = {
  ...light,
  name: 'dark',
  textColor: colors.primary,
  background: colors.black,
  backgroundDivColor: colors.offGrey,
  boxShadhow: "rgba(0,0,0,0) -5px 5px",
  starColor: colors.white,

}

export const themesObj = { light, dark }

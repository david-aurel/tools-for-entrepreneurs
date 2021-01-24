const light = {
  color: {
    primary: '#FFC6C7',
    background: '#FAEEE7',
    text: '#34272A',
    contrast: 'white',
    mediumContrast: '#34272A',
    card: 'white',
  },
}

export type Color = typeof light

const dark: Color = {
  color: {
    primary: '#FFC6C7',
    background: '#34272A',
    text: '#FAEEE7',
    contrast: '#211212',
    mediumContrast: '#211212',
    card: '#211212',
  },
}

const defaultTheme = {
  mq: '(min-width: 500px)',
  borderRadius: '5px',
}

export const lightTheme = { ...defaultTheme, ...light }
export type Theme = typeof lightTheme
export const darkTheme: Theme = { ...defaultTheme, ...dark }

// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'

export const CustomTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#0f0e15",
      },
    }),
  },
  colors: {
    black: 'red',
    white: '#fff',
    lightGreen: '#4fd1c5',

  },
  fontSizes: {
    sm: '0.85rem',
    md: '1rem',
    lg: '1.8rem',
  },
  
  fontWeight: {
    light: '300',
    regular: '400',
    bold: '600',

  }
})
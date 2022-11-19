// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'


export const CustomTheme = extendTheme({
  colors: {
    black: '#1a202c',
    white: '#f31717',
    lightGreen: '#4fd1c5'

  },
  fontSizes: {
    sm: '0.85rem',
    md: '1rem',
    lg: '1.8rem',
  },
  // components: {
  //   Button: {
  //     baseStyle: {
  //       fontWeight: '400',
  //       padding: '2px 15px',
  //       border: '1.5px solid',
  //       borderRadius: '50px',
  //     },
      
  //     sizes: {
  //       xl: {
  //         h: '56px',
  //         fontSize: 'lg',
  //         px: '32px',
  //       },
  //     },
  //   },
  // }
})
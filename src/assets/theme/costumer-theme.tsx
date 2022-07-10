// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'


export const CustomTheme = extendTheme({
  components: {
    Button: {
        // 1. We can update the base styles
        baseStyle: {
            fontWeight: '400', // Normally, it is "semibold"
            padding: '2px 15px',
            border: '1.5px solid',
            borderRadius: '50px'
        },
        // 2. We can add a new button size or extend existing
        sizes: {
            xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
            },
        },
    },
  },
})
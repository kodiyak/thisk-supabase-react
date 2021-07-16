import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../configs'
import { BoxColorMode } from '@friendlyss/react'

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{}}>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}

export default ThemeProvider

import { useColorMode } from '@chakra-ui/react'
import { BoxColorMode } from '@friendlyss/react'
import Routes from './routes/Routes'
import { useEffect } from 'react'

const Root: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode !== 'dark') {
      setColorMode(() => 'dark')
    }
  }, [colorMode])

  return (
    <BoxColorMode
      dark={{ bg: 'gray.900', minH: '100vh', color: 'white' }}
      pos="relative"
    >
      <Routes />
    </BoxColorMode>
  )
}

export default Root

import { Button, Heading, SimpleGrid, Square, Text } from '@chakra-ui/react'
import { BoxColorMode, Col, FormProvider, InputField, Row } from '@friendlyss/react'
import BgCircles from './components/Ux/BgCircles'
import MainCard from './components/Ux/Cards/MainCard'
import { BsLock } from 'react-icons/bs'
import LoginCard from './components/Ux/Login/LoginCard'
import Routes from './routes/Routes'

const Root: React.FC = () => {
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

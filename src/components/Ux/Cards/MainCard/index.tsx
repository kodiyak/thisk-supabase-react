import { BoxColorMode } from '@friendlyss/react'
import { BoxColorModeProps } from '@friendlyss/react/dist/chakra-ui/BoxColorMode'

interface MainCardProps extends BoxColorModeProps {}

const MainCard: React.FC<MainCardProps> = ({ children, ...rest }) => {
  return (
    <BoxColorMode
      d="flex"
      flexDir="column"
      border="1px solid transparent"
      dark={{ bg: 'gray.1000', borderColor: 'gray.700' }}
      {...rest}
    >
      {children}
    </BoxColorMode>
  )
}

export default MainCard

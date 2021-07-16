import { BoxProps, Square, Text } from '@chakra-ui/react'
import { Row, Col } from '@friendlyss/react'

interface ButtonLoginProps extends BoxProps {
  icon: React.ReactNode
  text: React.ReactNode
  color: string
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ icon, text, color, ...rest }) => {
  return (
    <Row alignItems="center" cursor="pointer" role="group" {...rest}>
      <Square
        size={12}
        bg="gray.800"
        border="1px solid transparent"
        borderColor="gray.700"
        rounded="lg"
        _groupHover={{
          borderColor: color,
          color: color,
          transform: 'scale(1.1)'
        }}
        transition="all .1s ease-in-out"
      >
        {icon}
      </Square>
      <Col flex={1} pl={4} _groupHover={{ color: color }}>
        <Text fontSize="xs">{text}</Text>
      </Col>
    </Row>
  )
}

export default ButtonLogin

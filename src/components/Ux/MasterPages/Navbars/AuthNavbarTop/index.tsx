import { Avatar, Text } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { useAuth } from '../../../../../contexts/AuthContext'

interface AuthNavbarTopProps {
  containerWidth: number
}

const AuthNavbarTop: React.FC<AuthNavbarTopProps> = ({ containerWidth }) => {
  const { user } = useAuth()

  return (
    <Col w="100%" h={20} pos="fixed" top={0} left={0} zIndex={10} pr={4}>
      <Row
        h="100%"
        w="100%"
        bgGradient="linear(to-r, darken.500, darken.700)"
        backdropFilter="blur(10px)"
      >
        <Row w={containerWidth} h="100%" mx="auto" alignItems="center">
          <Row ml="auto" w="30%" cursor="pointer" alignItems="center">
            <Avatar
              border="2px solid transparent"
              borderColor="green.500"
              src={user?.user_metadata.avatar_url}
            />
            <Col pl={4}>
              <Text fontSize="sm">{user?.user_metadata.full_name}</Text>
              <Text fontSize="xs" color="gray.300">
                {user?.email}
              </Text>
            </Col>
          </Row>
        </Row>
      </Row>
    </Col>
  )
}

export default AuthNavbarTop

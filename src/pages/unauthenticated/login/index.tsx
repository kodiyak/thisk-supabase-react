import { Row } from '@friendlyss/react'
import LoginCard from '../../../components/Ux/Login/LoginCard'

const login: React.FC = () => {
  return (
    <>
      <Row
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        bg="gray.1000"
      >
        <LoginCard />
      </Row>
    </>
  )
}

export default login

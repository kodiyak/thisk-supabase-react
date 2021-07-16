import { Divider, Heading, SimpleGrid, Square, Text } from '@chakra-ui/react'
import { Col, Row, InputField, FormProvider } from '@friendlyss/react'
import { BsLock } from 'react-icons/bs'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import MainCard from '../../Cards/MainCard'
import ButtonLogin from './ButtonLogin'
import AuthResource from '../../../../services/resources/AuthResource'

const LoginCard: React.FC = () => {
  return (
    <MainCard w={480} rounded="lg" overflow="hidden" shadow="2xl">
      <Col p={4} w="100%" bg="gray.900">
        <Row userSelect="none" mb={8}>
          <Heading size="md">Login</Heading>
        </Row>
        <FormProvider>
          <SimpleGrid gap={4}>
            <InputField
              name="username"
              label="E-mail ou Nome de Usuário"
              rounded="none"
              variant="flushed"
              _hover={{}}
              _focus={{ borderColor: 'primary.500' }}
            />
            <InputField
              name="password"
              label="Senha"
              variant="flushed"
              rounded="none"
              type="password"
              _hover={{}}
              _focus={{ borderColor: 'primary.500' }}
            />
            <ButtonLogin
              icon={<BsLock size={26} />}
              text="Autenticar"
              color="primary.400"
            />
            <Divider opacity={0} />
            <SimpleGrid gap={2}>
              <ButtonLogin
                icon={<VscGithub size={26} />}
                text="Entrar com Github"
                color="green.400"
                onClick={() => {
                  AuthResource.login({
                    provider: 'github'
                  })
                }}
              />
              <ButtonLogin
                icon={<AiOutlineFacebook size={28} />}
                text="Entrar com Facebook"
                color="facebook.400"
              />
              <ButtonLogin
                icon={<AiOutlineTwitter size={26} />}
                text="Entrar com Twitter"
                color="twitter.400"
              />
              <ButtonLogin
                icon={<AiOutlineGoogle size={26} />}
                text="Entrar com Google"
                color="google.400"
              />
            </SimpleGrid>
          </SimpleGrid>
        </FormProvider>
      </Col>
    </MainCard>
  )
}

export default LoginCard

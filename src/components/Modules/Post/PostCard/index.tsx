import { Avatar, Heading, Image, SimpleGrid, Square, Text } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import MainCard from '../../../Ux/Cards/MainCard'

const PostCard: React.FC = () => {
  const pics = Array.from([[], [], [], [], [], []])

  return (
    <MainCard rounded="lg" p={4}>
      <Row mb={4}>
        <Avatar size="md" />
        <Col flex={1} pl={4}>
          <Heading size="sm">Username</Heading>
          <Text fontSize="xs" color="gray.500">
            @userslug
          </Text>
        </Col>
        <Col>
          <Text mt="auto" fontSize="xs" color="gray.400">
            Há 20 minutos
          </Text>
        </Col>
      </Row>
      <Col
        pl={8}
        borderLeft="2px solid transparent"
        borderColor="primary.300"
        rounded="lg"
        bg="lighten.50"
        py={4}
        pr={4}
        mb={4}
      >
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e
        de impressos, e vem sendo utilizado desde o século XVI, quando um impressor
        desconhecido pegou uma bandeja de tip...
      </Col>
      <SimpleGrid gap={2} columns={4}>
        {pics.map((pic, keyPic) => (
          <Col key={`pic${keyPic}`}>
            <Square size={28} mx="auto">
              <Image
                w="100%"
                h="100%"
                objectFit="cover"
                rounded="lg"
                src="https://images.unsplash.com/photo-1619455052599-4cded9ae462a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                shadow="lg"
              />
            </Square>
          </Col>
        ))}
      </SimpleGrid>
    </MainCard>
  )
}

export default PostCard

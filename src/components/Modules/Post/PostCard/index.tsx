import {
  Avatar,
  Collapse,
  Heading,
  Image,
  SimpleGrid,
  Square,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { useEffect, memo } from 'react'

import Moment from 'react-moment'
import MainCard from '../../../Ux/Cards/MainCard'
import SlateChakraViewer from '../../../Ux/Overwrites/Slate/SlateChakraViewer'

interface PostCardProps {
  post: App.Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const pics = Array.from([[], [], [], [], [], []])
  const isUpCollapse = useDisclosure()
  const isUp = useDisclosure()

  useEffect(() => {
    setTimeout(() => {
      isUpCollapse.onOpen()
      setTimeout(() => {
        isUp.onOpen()
      }, 300)
    }, 100)
  }, [])

  return (
    <Collapse in={isUpCollapse.isOpen} animateOpacity>
      <MainCard
        rounded="2xl"
        p={4}
        dark={{ borderColor: 'gray.700', bg: 'gray.800' }}
        transition="all .4s cubic-bezier(.03,.95,.65,.95)"
        border="none"
        transform={
          isUp.isOpen ? 'translateY(0) scale(1)' : 'translateY(0) scale(0.90)'
        }
        opacity={isUp.isOpen ? 1 : 0.4}
      >
        <Row mb={4}>
          <Avatar size="md" src={post.users.avatar} />
          <Col flex={1} pl={4}>
            <Heading size="sm">{post.users.email}</Heading>
            <Text fontSize="xs" color="gray.500">
              @userslug
            </Text>
          </Col>
          <Col>
            <Row mt="auto" fontSize="xs" color="gray.400">
              <Moment locale="pt-br" format="LL [às] LTS">
                {post.created_at}
              </Moment>
            </Row>
          </Col>
        </Row>
        <Col p={4} rounded="2xl" bg="darken.100">
          <SlateChakraViewer value={post.content} />
        </Col>
        <SimpleGrid gap={2} columns={4}>
          {/* {pics.map((pic, keyPic) => (
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
          ))} */}
        </SimpleGrid>
      </MainCard>
    </Collapse>
  )
}

export default memo(PostCard)

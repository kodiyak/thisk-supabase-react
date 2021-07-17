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
import { useEffect, memo, useRef } from 'react'

import Moment from 'react-moment'
import { useIncrementIndex } from '../../../../hooks/helpers/useIncrementIndex'
import { usePostImages } from '../../../../hooks/posts/usePostImages'
import { api } from '../../../../services/api'
import { supabase } from '../../../../services/clients/supabase'
import MainCard from '../../../Ux/Cards/MainCard'
import SlateChakraViewer from '../../../Ux/Overwrites/Slate/SlateChakraViewer'
import PostImage from './PostImage'
import PostImages from './PostImages'

interface PostCardProps {
  post: App.Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const isUpCollapse = useDisclosure()
  const isUp = useDisclosure()

  const { postImages } = usePostImages(post, post.posts_images)

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
        <PostImages postImages={postImages} />
      </MainCard>
    </Collapse>
  )
}

export default PostCard

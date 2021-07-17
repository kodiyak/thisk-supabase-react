import { Button, HStack, Text } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { useState } from 'react'
import { AiOutlinePicture, AiOutlineVideoCamera } from 'react-icons/ai'
import { useAuth } from '../../../../contexts/AuthContext'
import { api } from '../../../../services/api'
import MainCard from '../../../Ux/Cards/MainCard'
import CircleButton from '../../../Ux/Overwrites/Buttons/CircleButton'
import SlateChakra from '../../../Ux/Overwrites/Slate/SlateChakra'
import AuthAvatar from '../../Auth/AuthAvatar'

const NewPostCard: React.FC = () => {
  const { user } = useAuth()
  const [newPost, setNewPost] = useState({})

  return (
    <MainCard rounded="3xl" border="none">
      <Col>
        <Row
          p={2}
          bg="gray.800"
          alignItems="center"
          roundedTop="3xl"
          border="2px solid transparent"
          borderColor="gray.1000"
        >
          <AuthAvatar size="sm" border="2px solid transparent" bg="green.500" />
          <Text pl={4} fontSize="xs">
            {user?.user_metadata.full_name}
          </Text>
        </Row>
        <SlateChakra
          onChange={(v) => {
            // console.log('value', v)
            setNewPost((oldPost) => ({ ...oldPost, content: v }))
          }}
        />
        <Row p={2} alignItems="center">
          <HStack spacing={4} flex={1} pr={4}>
            <CircleButton color="primary.400">
              <AiOutlinePicture size={23} />
            </CircleButton>
            <CircleButton color="green.400">
              <AiOutlineVideoCamera size={23} />
            </CircleButton>
          </HStack>
          <Button
            rounded="3xl"
            variant="ghost"
            colorScheme="primary"
            onClick={() => {
              api.post.create(newPost)
            }}
          >
            Enviar Post
          </Button>
        </Row>
      </Col>
    </MainCard>
  )
}

export default NewPostCard

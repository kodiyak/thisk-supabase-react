import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react'
import { BoxScroll, Col, Row } from '@friendlyss/react'
import NewPostCard from '../../../Modules/Post/NewPostCard'
import PostCard from '../../../Modules/Post/PostCard'
import PostsList from '../../../Modules/Post/PostsList'
import SlateChakra from '../../Overwrites/Slate/SlateChakra'
import AuthNavbarTop from '../Navbars/AuthNavbarTop'
import AuthSidebar from '../Sidebars/AuthSidebar'

const AuthMasterPage: React.FC = () => {
  const CONTAINER_WIDTH = 920
  return (
    <Col w="100%" h="100%" pos="absolute" left={0} top={0}>
      <AuthNavbarTop containerWidth={CONTAINER_WIDTH} />
      <Box w="100%" h="100%" pos="absolute" zIndex={5}>
        <BoxScroll
          bgScroll="gray.800"
          bgScrollHover="gray.700"
          w="100vw"
          h="100vh"
          pt={20}
        >
          <Box h={3000}>
            <Row w={CONTAINER_WIDTH} mx="auto">
              <Col w={280} pt={8} pr={4}>
                <AuthSidebar />
              </Col>
              <Col flex={1} pt={8}>
                <NewPostCard />
                <Col my={8}>
                  <Row mb={2}>
                    <Text fontSize="xs" fontWeight="bold" color="GrayText">
                      Ultimos Posts
                    </Text>
                  </Row>
                  <PostsList />
                </Col>
              </Col>
            </Row>
          </Box>
        </BoxScroll>
      </Box>
    </Col>
  )
}

export default AuthMasterPage

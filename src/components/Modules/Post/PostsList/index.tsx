import { SimpleGrid } from '@chakra-ui/react'
import { Col } from '@friendlyss/react'
import { useTimelinePosts } from '../../../../hooks/posts/useTimelinePosts'
import PostCard from '../PostCard'

const PostsList: React.FC = () => {
  const { posts } = useTimelinePosts()
  return (
    <Col>
      <SimpleGrid gap={8}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Col>
  )
}

export default PostsList

import { useDisclosure, Collapse, SimpleGrid, Box } from '@chakra-ui/react'
import { Col } from '@friendlyss/react'
import { useEffect, useRef } from 'react'
import { useIncrementIndex } from '../../../../../hooks/helpers/useIncrementIndex'
import PostImage from '../PostImage'

interface PostImagesProps {
  postImages: App.Upload.PostImage[]
}

const PostImages: React.FC<PostImagesProps> = ({ postImages }) => {
  const { currentIndex, start } = useIncrementIndex(0, postImages.length, 100)
  const showPictures = useDisclosure()
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current) {
      const intersection = new IntersectionObserver((entries) => {
        if (entries.length > 0) {
          const [entry] = entries
          if (
            entry.isIntersecting &&
            !showPictures.isOpen &&
            postImages.length > 0
          ) {
            showPictures.onOpen()
          }
        }
      })

      intersection.observe(divRef.current)

      return () => {
        intersection.disconnect()
      }
    }
  }, [divRef.current, postImages.length])

  useEffect(() => {
    start()
  }, [])

  useEffect(() => {
    if (showPictures.isOpen && postImages.length > 0) {
      start()
    }
  }, [postImages.length])

  return (
    <>
      <Box ref={divRef}>
        <Collapse in={showPictures.isOpen}>
          {postImages.length > 0 && showPictures.isOpen && (
            <SimpleGrid gap={2} columns={4} mt={4}>
              {postImages.map((postImage, keyPostImage) => (
                <Col
                  key={`postImage${keyPostImage}`}
                  transition="all .2s ease-in-out"
                  opacity={currentIndex >= keyPostImage ? 1 : 0}
                >
                  <PostImage postImage={postImage} />
                </Col>
              ))}
            </SimpleGrid>
          )}
        </Collapse>
      </Box>
    </>
  )
}

export default PostImages

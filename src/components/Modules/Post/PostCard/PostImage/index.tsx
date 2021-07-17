import { Image, Skeleton, Square } from '@chakra-ui/react'
import { Col } from '@friendlyss/react'
import { useEffect, useState } from 'react'

import { api } from '../../../../../services/api'

interface PostImageProps {
  postImage: App.Upload.PostImage
}

const PostImage: React.FC<PostImageProps> = ({ postImage }) => {
  const [src, setSrc] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    api.upload
      .fromBucket(postImage.uploads.bucket as any)
      .createSignedUrl(`${postImage.uploads.path}`, 60)
      .then((res) => {
        // console.log('res', res)
        const { signedURL } = res
        if (signedURL) {
          setSrc(signedURL)
        }
      })
  }, [])

  return (
    <Col h={120} pos="relative">
      {!isLoaded && (
        <Skeleton
          w="100%"
          h="100%"
          rounded="lg"
          zIndex={5}
          startColor="lighten.100"
          endColor="lighten.200"
          pos="absolute"
          left={0}
          top={0}
        />
      )}
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        rounded="lg"
        src={src}
        shadow="lg"
        zIndex={10}
        pos="absolute"
        left={0}
        top={0}
        opacity={isLoaded ? 1 : 0}
        transition="all .2s ease-in-out"
        onLoad={() => {
          setIsLoaded(true)
        }}
      />
    </Col>
  )
}

export default PostImage

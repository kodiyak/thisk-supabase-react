import { CloseButton, Image, Square, Text } from '@chakra-ui/react'
import { Col, FileSize, Row } from '@friendlyss/react'
import { useState } from 'react'
import { useBlobUrl } from '../../../../../hooks/helpers/useBlobUrl'

interface PictureItemProps {
  picture: File
  onRemove?: () => void
}

const PictureItem: React.FC<PictureItemProps> = ({ picture, onRemove }) => {
  const { blobUrl } = useBlobUrl(picture)

  return (
    <Row rounded="md" bg="gray.800" p={1} alignItems="center">
      <Square size={10} rounded="md">
        <Image src={blobUrl} w="100%" h="100%" objectFit="cover" rounded="md" />
      </Square>
      <Col flex={1} pl={2}>
        <Text fontSize="xs">{picture.name}</Text>
        <Text fontSize="xs" color="GrayText">
          <FileSize sizeFormat="KB">{picture.size}</FileSize> KB
        </Text>
      </Col>
      {onRemove && <CloseButton size="sm" mr={2} onClick={() => onRemove()} />}
    </Row>
  )
}

export default PictureItem

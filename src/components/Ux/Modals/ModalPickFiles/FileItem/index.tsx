import { Square, CloseButton, Text, Image } from '@chakra-ui/react'
import { Col, BoxOverlay, Row } from '@friendlyss/react'
import { useCallback, useMemo, useState, useEffect } from 'react'
import { useBlobUrl } from '../../../../../hooks/helpers/useBlobUrl'

interface FileItemProps {
  file: File
  isValid: boolean
  onRemove?: () => void
}

const FileItem: React.FC<FileItemProps> = ({ file, isValid, onRemove }) => {
  const { blobUrl } = useBlobUrl(file)
  const isImage = useMemo(() => {
    if (file.type.startsWith('image/')) {
      return true
    }

    return false
  }, [file.type])

  return (
    <Col alignItems="center">
      <Square
        size={40}
        bg="gray.800"
        rounded="lg"
        userSelect="none"
        overflow="hidden"
        _hover={{ bg: 'gray.700' }}
        pos="relative"
        border="2px solid transparent"
        borderColor={isValid ? 'blue.300' : 'red.400'}
      >
        <BoxOverlay
          zIndex={10}
          rounded="lg"
          bgGradient="linear(to-b, transparent, darken.300)"
        >
          <Col w="100%" h="100%">
            <Row p={2}>
              <Text p={2} rounded="md" bg="darken.300" fontSize="xs">
                {file.name}
              </Text>
            </Row>
            <Row mt="auto" p={2}>
              <Row flex={1} />
              {onRemove && (
                <CloseButton
                  onClick={() => {
                    onRemove()
                  }}
                />
              )}
            </Row>
          </Col>
        </BoxOverlay>
        <Image
          w="100%"
          h="100%"
          pos="relative"
          zIndex={5}
          objectFit="cover"
          src={blobUrl}
        />
      </Square>
    </Col>
  )
}

export default FileItem

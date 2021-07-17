import {
  Button,
  CloseButton,
  Image,
  Input,
  SimpleGrid,
  Square,
  Text
} from '@chakra-ui/react'
import { useDisclosure } from '@friendlyss/disclosure'
import { BoxOverlay, Col, Modal, Row } from '@friendlyss/react'
import { useEffect, useState, ChangeEvent, useCallback, useRef } from 'react'

import { BsPlusCircle } from 'react-icons/bs'
import FileItem from './FileItem'

const ModalPickFiles: React.FC = () => {
  const { data, onClose } = useDisclosure('Modal.FilePicker')
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  const onAddFile = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    setFiles((oldFiles) => [...oldFiles, ...files])

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }, [])

  const removeFile = useCallback((indexFile: number) => {
    setFiles((oldFiles) => oldFiles.filter((_, keyFile) => keyFile !== indexFile))
  }, [])

  const isValid = useCallback(
    (file: File) => {
      return data.types?.includes(file.type) || false
    },
    [data.types]
  )

  return (
    <Modal
      name="Modal.FilePicker"
      _modal={{
        size: '3xl'
      }}
      _content={{
        rounded: 'md',
        shadow: 'none',
        bg: 'gray.900',
        border: '2px solid transparent',
        borderColor: 'gray.800'
      }}
      title="Selecione os arquivos..."
    >
      <Input
        type="file"
        display="none"
        ref={inputRef}
        multiple
        onChange={onChangeInput}
      />
      <Col>
        <SimpleGrid gap={4} columns={4}>
          {files.map((file, keyFile) => (
            <FileItem
              file={file}
              key={`file${keyFile}`}
              isValid={isValid(file)}
              onRemove={() => {
                removeFile(keyFile)
              }}
            />
          ))}
          <Col alignItems="center">
            <Square
              size={40}
              bg="gray.800"
              rounded="lg"
              cursor="pointer"
              userSelect="none"
              onClick={() => onAddFile()}
              border="2px solid transparent"
              borderColor="gray.700"
              _hover={{ bg: 'gray.700' }}
            >
              <BsPlusCircle size={32} />
            </Square>
          </Col>
        </SimpleGrid>
        <Row my={2} alignItems="center">
          <Row flex={1} userSelect="none">
            <Text fontSize="xs" color="GrayText">
              {data.message}
            </Text>
          </Row>
          <Button
            rounded="sm"
            colorScheme="primary"
            variant="outline"
            borderWidth={2}
            px={8}
            onClick={() => {
              data.onSelect?.(files)
              setFiles(() => [])
              onClose()
            }}
          >
            Selecionar
          </Button>
        </Row>
      </Col>
    </Modal>
  )
}

export default ModalPickFiles

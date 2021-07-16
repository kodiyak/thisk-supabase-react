import { SimpleGrid, Text } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import ButtonRowSidebar, { ButtonRowSidebarProps } from '../ButtonRowSidebar'

interface MainSidebarProps {
  menus: Array<{
    title: string
    buttons: ButtonRowSidebarProps[]
  }>
}

const MainSidebar: React.FC<MainSidebarProps> = ({ menus }) => {
  return (
    <>
      {menus.map((menu, keyMenu) => (
        <Col key={`menu${keyMenu}`}>
          <Row mb={4}>
            <Text fontSize="xs" fontWeight="bold">
              {menu.title}
            </Text>
          </Row>
          <SimpleGrid gap={2}>
            {menu.buttons.map((button, keyButton) => (
              <ButtonRowSidebar key={`button${keyMenu}${keyButton}`} {...button} />
            ))}
          </SimpleGrid>
        </Col>
      ))}
    </>
  )
}

export default MainSidebar

import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { BsHouse } from 'react-icons/bs'
import { AiFillFire, AiOutlineLogout } from 'react-icons/ai'
import ButtonRowSidebar from '../ButtonRowSidebar'
import MainSidebar from '../MainSidebar'
import AuthResource from '../../../../../services/resources/AuthResource'

const AuthSidebar: React.FC = () => {
  return (
    <Box w="100%" pos="sticky" top={4}>
      <MainSidebar
        menus={[
          {
            title: 'Main Menu',
            buttons: [
              {
                title: 'Home',
                color: 'green.500',
                icon: <BsHouse />,
                isActive: true
              },
              {
                title: 'Trending',
                color: 'orange.500',
                icon: <AiFillFire />
              }
            ]
          },
          {
            title: '',
            buttons: [
              {
                title: 'Logout',
                color: 'red.500',
                icon: <AiOutlineLogout />,
                onClick: () => {
                  AuthResource.logout()
                }
              }
            ]
          }
        ]}
      />
    </Box>
  )
}

export default AuthSidebar

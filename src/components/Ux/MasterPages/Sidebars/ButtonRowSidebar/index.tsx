import { Circle, Text, useToken } from '@chakra-ui/react'
import { Col, Row } from '@friendlyss/react'
import { lighten, rgba } from 'polished'
import { Link } from 'react-router-dom'

export interface ButtonRowSidebarProps {
  icon: React.ReactNode
  title: React.ReactNode
  color: string
  description?: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  to?: string
}

const ButtonRowSidebar: React.FC<ButtonRowSidebarProps> = ({
  icon,
  title,
  description,
  color,
  isActive,
  to,
  onClick
}) => {
  const [hexColor] = useToken('colors', [color])
  const rgbaColor = rgba(hexColor, 0.1)
  const lightenColor = lighten(0.2)(hexColor)

  const ButtonComponent: React.FC = () => (
    <Row
      role="group"
      alignItems="center"
      cursor="pointer"
      userSelect="none"
      onClick={onClick}
    >
      <Circle
        size={10}
        border="2px solid transparent"
        bg={isActive ? rgbaColor : undefined}
        borderColor={isActive ? color : 'gray.700'}
        color={isActive ? color : undefined}
        _groupHover={{ bg: rgbaColor, borderColor: color, color }}
      >
        {icon}
      </Circle>
      <Col flex={1} pl={4}>
        <Text
          fontSize="sm"
          color={isActive ? lightenColor : undefined}
          _groupHover={{ color: lightenColor }}
        >
          {title}
        </Text>
        <Text
          fontSize="xs"
          color={isActive ? color : undefined}
          _groupHover={{ color }}
        >
          {description}
        </Text>
      </Col>
    </Row>
  )

  return to ? (
    <Link to={to}>
      <ButtonComponent />
    </Link>
  ) : (
    <ButtonComponent />
  )
}

export default ButtonRowSidebar

import { Circle, SquareProps } from '@chakra-ui/react'

interface CircleButtonProps extends SquareProps {
  color: string
}

const CircleButton: React.FC<CircleButtonProps> = ({ color, children, ...rest }) => {
  return (
    <Circle
      size={10}
      border="2px solid transparent"
      borderColor="gray.700"
      color="gray.400"
      transition="all .1s ease-in-out"
      cursor="pointer"
      userSelect="none"
      _hover={{ transform: 'scale(1.1)', color, borderColor: color }}
      _active={{ transform: 'scale(0.98)' }}
      {...rest}
    >
      {children}
    </Circle>
  )
}

export default CircleButton

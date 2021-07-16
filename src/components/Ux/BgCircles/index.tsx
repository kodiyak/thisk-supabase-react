import { Box, BoxProps, Circle } from '@chakra-ui/react'
import { BoxOverlay } from '@friendlyss/react'

type CirclePos = {
  size: number
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

interface BgCirclesProps extends BoxProps {}

const BgCircles: React.FC<BgCirclesProps> = ({ children, ...rest }) => {
  const circles: CirclePos[] = [
    { left: '10%', top: 30, size: 400 },
    { bottom: '8%', left: '20%', size: 40 },
    { bottom: '5%', right: '33%', size: 64 },
    { top: '20%', right: '20%', size: 32 }
  ]

  return (
    <Box {...rest}>
      <BoxOverlay zIndex={5} overflow="hidden" pos="fixed">
        {circles.map((circle, keyCircle) => (
          <Circle
            key={`circle${keyCircle}`}
            bg="primary.600"
            pos="absolute"
            {...circle}
          />
        ))}
      </BoxOverlay>
      <Box pos="relative" zIndex={10} {...rest}>
        {children}
      </Box>
    </Box>
  )
}

export default BgCircles

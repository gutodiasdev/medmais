import { Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

type DashboardLayoutProps = {
  children: ReactNode
}

function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={{ lg: '180px 1fr' }}
    >
      <Box>
        <Text>VerticalMenu</Text>
      </Box>
      <Box 
        height={'100vh'} 
        backgroundColor={'gray.50'}
      >
        { children }
      </Box>
    </Box>
  )
}

export { DashboardLayout }

import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { DashboardVerticalMenu } from './dashboard-vertical-menu'

type DashboardLayoutProps = {
  children: ReactNode
}

function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={{ lg: '180px 1fr' }}
    >
      <DashboardVerticalMenu />
      <Box
        height={'100vh'}
        backgroundColor={'gray.50'}
        padding={6}
        overflowY={'auto'}
      >
        { children }
      </Box>
    </Box>
  )
}

export { DashboardLayout }

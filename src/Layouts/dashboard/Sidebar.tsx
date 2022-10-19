import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
import { Box, Drawer, Typography } from '@mui/material'
// hooks
import useResponsive from '../../hooks/useResponsive'
// components
import Scrollbar from '../../components/Scrollbar'
import NavSection from '../../components/NavSection'

import navConfig from './NavConfig'
import Logo from '../../components/Logo'

const DRAWER_WIDTH = 280

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}))

export default function Sidebar({
  isOpenSidebar,
  onCloseSidebar,
}: {
  isOpenSidebar: boolean
  onCloseSidebar: () => void
}) {
  const { pathname } = useLocation()

  const isDesktop = useResponsive('up', 'lg')

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar()
    }
  }, [pathname])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
        <Logo />
        <Typography variant='h5' sx={{ px: 2 }}>
          Ing Hire
        </Typography>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  )

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant='persistent'
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  )
}

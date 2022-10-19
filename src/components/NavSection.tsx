import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom'
// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import { Box, List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material'

const ListItemStyle = styled((props: any) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
  }),
)

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

function NavItem({
  item,
  active,
}: {
  item: { path: string; title: string; icon: string; info: string }
  active: (path: string) => boolean
}) {
  const theme = useTheme()

  const isActiveRoot = active(item.path)

  const { title, path, icon, info } = item

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  )
}

export default function NavSection({ navConfig, ...other }: any) {
  const { pathname } = useLocation()

  const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false)

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item: any) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  )
}

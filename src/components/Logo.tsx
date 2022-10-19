import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Box } from '@mui/material'

export default function Logo({ disabledLink = false, sx }: any) {
  const logo = <Box component='img' src='/static/logo.svg' sx={{ width: 40, height: 40, ...sx }} />

  if (disabledLink) {
    return logo
  }

  return <RouterLink to='/'>{logo}</RouterLink>
}
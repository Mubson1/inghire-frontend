import { Helmet } from 'react-helmet-async'
import { forwardRef } from 'react'
// @mui
import { Box } from '@mui/material'

const Page = forwardRef(({ children, title = '', meta, ...other }: any, ref) => (
  <>
    <Helmet>
      <title>{`${title} | HireApp-UI`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
))

export default Page

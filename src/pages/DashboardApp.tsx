// @mui
import { Button, Container, Typography } from '@mui/material'
import UserService from 'src/services/UserService'
import axios from 'src/services/HttpService'
import Page from '../components/Page'

export default function DashboardApp() {
  const test = async () => {
    try {
      console.log(axios)

      const response = await axios.get('/test/user')
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Page title='Dashboard'>
      <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>
        <Typography>{UserService.getUsername()}</Typography>
        <Button onClick={() => UserService.doLogin()}>Login</Button>
        <Button onClick={() => UserService.doLogout()}>LogOut</Button>
        <Button onClick={() => test()}>Test Button</Button>
      </Container>
    </Page>
  )
}

import UserService from 'src/services/UserService'
import { ReactNode } from 'react'

type IRenderOnAuthenticated = {
  children: ReactNode
}

const RenderOnAuthenticated = ({ children }: IRenderOnAuthenticated) =>
  UserService.isLoggedIn() ? children : null

export default RenderOnAuthenticated

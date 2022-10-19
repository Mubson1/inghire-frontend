import UserService from 'src/services/UserService'
import { ReactNode } from 'react'

type IRenderOnAnonymous = {
  children: ReactNode
}

const RenderOnAnonymous = ({ children }: IRenderOnAnonymous) =>
  !UserService.isLoggedIn() ? children : null

export default RenderOnAnonymous

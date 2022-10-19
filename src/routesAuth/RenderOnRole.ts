import UserService from 'src/services/UserService'
import { ReactNode } from 'react'

type IRenderOnRole = {
  children: ReactNode
  roles: Array<string>
}

const RenderOnRole = ({ roles, children }: IRenderOnRole) =>
  UserService.hasRole(roles) ? children : null

export default RenderOnRole

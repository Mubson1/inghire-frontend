import axios from 'axios'
import UserService from './UserService'

// y

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (UserService.isLoggedIn()) {
      const cb = () => {
        // console.log('hello')
        // console.log(UserService.getToken())

        config.headers!.authorization = `Bearer ${UserService.getToken()}`
        return Promise.resolve(config)
      }
      UserService.updateToken(cb)
      // console.log(config)
      return config
    }
    return console.log()
  },
  (error) => {
    return Promise.reject(error)
  },
)

// const HttpService = {
//   axiosInstance,
//   HttpMethods,
// }

export default axiosInstance

import Keycloak from 'keycloak-js'

const kc = new Keycloak({
  url: 'http://localhost:8000',
  realm: 'keycloak-react-auth',
  clientId: 'React-auth',
})

const initKeycloak = (onAuthenticatedCallback: any) => {
  kc.init({
    onLoad: 'check-sso',
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log('User is not authenticated')
      }

      onAuthenticatedCallback()
    })
    .catch((err) => console.log(err))
}

const doLogin = kc.login

const doLogout = kc.logout

const getToken = () => kc.token

const isLoggedIn = () => !!kc.token

const updateToken = (successCallback: any) => kc.updateToken(5).then(successCallback).catch(doLogin)

const getUsername = () => kc.tokenParsed?.preferred_username

const hasRole = (roles: string[]) => roles.some((role: string) => kc.hasRealmRole(role))

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
}

export default UserService

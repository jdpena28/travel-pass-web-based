export const state = () => ({
  login: {
    email: 'email123',
    password: 'pass',
  },
  auth:{
    token:'',
    displayName: ''
  },
  token: '',
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  SET_AUTH_GOOGLE(state, auth) {
    state.auth = {
      displayName: auth.user.displayName
    }
  },
  SET_ACCESS_TOKEN(state, token) {
    state.token = token.user.accessToken
  }
}

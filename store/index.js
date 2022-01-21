export const state = () => ({
  login: {
    email: 'email123',
    password: 'pass',
  },
  auth: {
    token: '',
    displayName: '',
    email: '',
  },
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  SET_AUTH(state, auth) {
    state.auth = {
      token: auth.user.accessToken,
      displayName: auth.user.displayName,
      email: auth.user.email,
    }
  },
}

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    })
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    })
  },
  async auth(context, payload) {
    const mode = payload.mode
    let url = ''
    if (mode === 'login') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPr_lHRMEoGU-eaiZeeVmq9KtFoXyLVA0'
    }
    if (mode === 'signup') {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPr_lHRMEoGU-eaiZeeVmq9KtFoXyLVA0'
    }
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()
    if (!response.ok) {
      console.log(responseData)
      const error = new Error(responseData.message || 'Failed to authenticated')
      throw error
    }
    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  autoLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      })
    }
  },
  logout(context) {
    context.commit('setUser', {
      userId: null,
      token: null,
      tokenExpiration: null
    })
  }
}
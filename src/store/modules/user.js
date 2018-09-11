const user = {
  state: {
  },
  mutations: {
    // SET_TOKEN: (state, token) => {
    //   state.token = token
    //   setToken(token, {
    //     expires: 7
    //   })
    // }
  },
  actions: {
    // LoginByUsername ({ commit }, userInfo) {
    //   const { username, password } = userInfo
    //   return new Promise((resolve, reject) => {
    //     loginByUsername({
    //       username: username.trim(),
    //       password
    //     }).then(res => {
    //       const status = res.data.status
    //       const { token, head, name } = res.data.data

    //       if (status === 200) {
    //         commit('SET_TOKEN', token)
    //         commit('SET_USER_INFO', {
    //           head,
    //           name,
    //           loginState: true
    //         })
    //         resolve()
    //       } else {
    //         resolve(res.data.msg)
    //       }
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user

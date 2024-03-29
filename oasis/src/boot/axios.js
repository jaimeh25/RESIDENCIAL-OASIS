import { boot } from 'quasar/wrappers'
import axios from 'axios'

const token = 'Token ' + localStorage.getItem('token')
const api = axios.create({ baseURL: 'https://jcsoftapi.com/'  })
if (token.length > 20) {
  api.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token')
}

//const api = axios.create({ baseURL: 'https://localhost:44335/'  })
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }
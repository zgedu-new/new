import Axios from 'axios'
import { ElMessage } from 'element-plus'
const baseURL = 'https://api.com'

const axios = Axios.create({
  baseURL,
  timeout: 2000
})

axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
axios.interceptors.request.use(
  (response) => {},
  (error) => {}
)

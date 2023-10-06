import axios from 'axios'

const client = axios.create({
  baseURL: 'https://hbs-dev.uicgroup.tech/api/v1/',
  Authorization: '1696510476404'
})

export default client

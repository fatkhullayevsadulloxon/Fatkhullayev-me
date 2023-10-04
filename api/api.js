import axios from 'axios'

const client = axios.create({
  baseURL: 'https://hbs-dev.uicgroup.tech/api/v1/',
})

export default client

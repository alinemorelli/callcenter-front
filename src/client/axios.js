import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default instance

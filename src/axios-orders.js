import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-c3536.firebaseio.com/'
})

export default instance

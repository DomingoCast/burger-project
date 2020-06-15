import axios from 'axios'

const instance = axios.create({
    baseURl: 'https://burger-builder-c3536.firebaseio.com/'
})

export default instance

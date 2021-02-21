import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3001/api', // Could use process.env.PORT here
    headers: {
        'Content-type': 'application/json',
    },
})

export const setAxiosAuthHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

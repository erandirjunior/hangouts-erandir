import axios from 'axios'

const http = axios.create({
    baseURL: 'https://swapi.co/api'
})

export default {
    read (id) {
        return http.get(`/people/${id}`)
    },
    update (data) {
        return http.post('/people/1', data)
    }
}

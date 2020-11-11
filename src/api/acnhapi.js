import axios from 'axios';

export const acnhapi = axios.create({
    baseURL: 'https://acnhapi.com/v1a/'
})

export const userDataApi = axios.create({
    baseURL: 'http://localhost:8080'
})
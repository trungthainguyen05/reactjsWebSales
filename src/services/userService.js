import axios from '../axios';
import { ROUTE } from '../utils/constant'


const getAllUsers = (limit) => {
    // return axios.get(ROUTE.VERSION_1 & '/api/get-all-user', limit);
    return axios.get(`${ROUTE.VERSION}/api/get-all-user`, limit);
}

const getAllcodes = (inputType) => {
    return axios.get(`${ROUTE.VERSION}/api/get-allcodes?type=${inputType}`)
}

const handleLoginApi = (email, password) => {
    return axios.post(`${ROUTE.VERSION}/api/login`, { email, password })
}

export {
    getAllUsers, getAllcodes,
    handleLoginApi
}
import axios from '../axios';
import { ROUTE } from '../utils/versionRoute'


const getAllUsers = (limit) => {
    // return axios.get(ROUTE.VERSION_1 & '/api/get-all-user', limit);
    return axios.get(`${ROUTE.VERSION_1}/api/get-all-user`, limit);
}

export {
    getAllUsers
}
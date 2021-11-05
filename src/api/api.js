import axios from "axios";


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}

export const getProfile = (id) => {
    return axios.get(baseUrl + `profile/${id}`)
}

export const getMyProfile = () => {
    return axios.get(baseUrl + 'auth/me', {
        withCredentials: true
    })
}

export const userUnfollow = (id) => {
    return axios.delete(baseUrl + `follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "8fdcb7d4-5550-43e8-9050-a2c722557081"
        }
    }).then(response => response.data)
}

export const userFollow = (id) => {
    return axios.post(baseUrl + `follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "8fdcb7d4-5550-43e8-9050-a2c722557081"
        }
    }).then(response => response.data)
}
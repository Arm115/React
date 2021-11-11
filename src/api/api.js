import axios from "axios";


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bff48853-a4bc-467d-b7fd-cd70b48b6a72"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
}
export const profileAPI = {
    getProfile (id){
        return axios.get(baseUrl + `profile/${id}`)
    },
    getMyProfile(){
        return instance.get('auth/me')
    }
}

export const followAPi = {
    userFollowing(id){
        return instance.post(`follow/${id}`, {})
    },
    userUnfollowing(id){
        return instance.delete(`follow/${id}`)
    }
}

export const statusApi = {
    getUserStatus(id){
        return instance.get(`/profile/status${id}`)
    }
}
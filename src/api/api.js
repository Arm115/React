import axios from "axios";


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8fdcb7d4-5550-43e8-9050-a2c722557081"
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

export const followAPI = {
    userUnfollow(id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    userFollow(id){
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    }
}


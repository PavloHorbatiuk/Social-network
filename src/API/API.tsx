import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "c9285f11-d925-4b54-a585-0cfc21bacaae"
        }
    }
)
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            })
    },
    getUsersFollow(id = 1) {
        return instance.post(`follow/${id}`)
    },
    getUsersUnFollow(id = 1) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId: string) {
        console.warn("Absolute method. Please profileAPI object.")
        return instance.get(`profile/` + userId)
    }
}
export const profileAPI = {
    // getProfile(userId: string) {
    //     return instance.get(`profile` + userId)
    // },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
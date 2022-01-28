import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ea4c9edd-3f8d-457b-9802-854aa43a40ca",
    },
});
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    getUsersFollow(id = 1) {
        return instance.post(`follow/${id}`);
    },
    getUsersUnFollow(id = 1) {
        return instance.delete(`follow/${id}`);
    },
    getProfile(userId: string) {
        console.warn("Absolute method. Please profileAPI object.");
        return instance.get(`profile/` + userId);
    },
};
export const profileAPI = {
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    Logout() {
        return instance.delete(`auth/login`);
    },
}

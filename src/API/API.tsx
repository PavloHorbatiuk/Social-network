import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "5f06c004-61e0-4dfb-b3d1-0a5565b80aea"
        }
    }
)
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response => {
            return response.data;
        })

}
export const getUsersFollow = (id=1)=>{
    return instance.post(`follow/${id}`)
}
export const getUsersUnFollow = (id=1)=>{
    return instance.delete(`follow/${id}`)
}
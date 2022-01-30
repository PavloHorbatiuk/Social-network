import { AppRootStateType } from "./redax-store";

export const getUsers = (state: AppRootStateType) => {
    return state.users;
}
export const getPageSize = (state: AppRootStateType) => {
    return state.users.pageSize;
}
export const getTOtalUsersCount = (state: AppRootStateType) => {
    return state.users.totalUserCount;
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.users.currentPage;
}
export const getIsFetching = (state: AppRootStateType) => {
    return state.users.isFetching;
}
export const getFolliwingInPorgress = (state: AppRootStateType) => {
    return state.users.followingInProgres;
}
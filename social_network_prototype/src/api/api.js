import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6847b8b0-6480-41e7-80b9-70115535fc82"
    },
})

export const getUsers = (pageSize, pages) => {
    return instance.get(`users?count=${pageSize}&page=${pages}`).then(response => {
        return response.data
    })
}
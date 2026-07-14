import axios from "axios";
import { endpointUrl } from "../constants/endpointUrl";

const Api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const refreshToken = async() => {
    const response = await Api.post(endpointUrl.REFRESH)
    const newAccessToken = response?.data?.accessToken
    if(!newAccessToken){
        throw new Error("No access token returned")
    }
    return newAccessToken
}

Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

Api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        if(error.response.status === 401 && !originalRequest._retry){

            originalRequest._retry = true
            try {
                const newAccessToken = await refreshToken()
                localStorage.setItem("accessToken", newAccessToken)

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return Api(originalRequest)
            } catch (error) {
                localStorage.removeItem("accessToken")
                window.location.href = "/login"
            }
        }
        return Promise.reject(error);
    }
)

export default Api;
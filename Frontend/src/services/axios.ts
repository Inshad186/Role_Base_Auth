import axios from "axios";
import { endpointUrl } from "../constants/endpointUrl";
import store from "../redux/store";
import { setAccessToken, logout } from "../redux/slices/authSlice";
import { removeUser } from "../redux/slices/userSlice";

const getAccessToken = (): string | null => {
    const state = store.getState()
    return state.auth.accessToken
}

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
    store.dispatch(setAccessToken(newAccessToken))
    return newAccessToken
}

Api.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
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
        if(
            error.response.status === 401 && 
            !originalRequest._retry &&
            originalRequest.url !== endpointUrl.REFRESH
        ){

            originalRequest._retry = true
            try {
                const newAccessToken = await refreshToken()
                store.dispatch(setAccessToken(newAccessToken))

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return Api(originalRequest)
            } catch (error) {
                store.dispatch(logout())
                store.dispatch(removeUser())
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
)

export default Api;
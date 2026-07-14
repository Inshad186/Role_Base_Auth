import Api from "../services/axios";
import { endpointUrl } from "../constants/endpointUrl";

export const login = async(formData: any) => {
    try {
        const { data } = await Api.post(endpointUrl.LOGIN, formData)
        return {success: true, data}
    } catch (error) {
        const err = error as any
        const message = err.response?.data?.error || "Something went wrong"
        return {success: false, error: message}
    }
}

export const home = async() => {
    try {
        const { data } = await Api.get(endpointUrl.HOME)
        return {success: true, data}
    } catch (error) {
        const err = error as any
        const message = err.response?.data?.error || "Something went wrong"
        return {success: false, error: message}
    }
}

export const getProfile = async() => {
    try {
        const {data} = await Api.get(endpointUrl.PROFILE)
        return {success: true, data}
    } catch (error) {
        const err = error as any
        const message = err.response?.data?.error || "Something went wrong"
        return {success: false, error: message}
    }
}

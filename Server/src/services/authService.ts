import { refreshToken } from "../controllers/authController"
import { findById, findOne } from "../repositories/authRepository"
import { generateAccessToken, generateRefreshToken, verifyToken } from "../utils/jwt"

export const authService = async(email: string, password: string) => {
    try {
        const user = await findOne(email)
        if(!user){
            throw new Error("User not Found")
        }

        const accessToken = generateAccessToken(
            {
                userId: user._id.toString(),
                role: user.role
            }
        )

        const refreshToken = generateRefreshToken(
            {
                userId: user._id.toString(),
                role: user.role
            }
        )
        return { accessToken, refreshToken, role: user.role}
    } catch (error) {
        throw error
    }
}

export const sProfile = async(userId: string) => {
    try {
        let user = await findById(userId)
        if(!user){
            throw new Error("user not found")
        }
        let role = user?.role
        return {role}
    } catch (error) {
        throw error
    }
}

export const srefreshToken = async(token: string) => {
    try {
        const payload = await verifyToken(token)
        if(!payload){
            throw new Error("payload not found")
        }

        const user = await findById(payload.userId)
        if(!user){
            throw new Error("User not Found")
        }
        
        const accessToken = generateAccessToken(
            {
                userId: user._id.toString(),
                role: user.role
            }
        )
        return accessToken
    } catch (error) {
        throw error
    }
}

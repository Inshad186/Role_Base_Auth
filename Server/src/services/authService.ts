import bcrypt from "bcryptjs"
import { authRepository } from "../repositories/authRepository"
import { generateAccessToken, generateRefreshToken, verifyToken } from "../utils/jwt"

const signUp = async(data: any) => {
    try {
        const existingUser = await authRepository.findOne(data.email)

        if(existingUser){
            throw new Error("User is already exist")
        }
        const hashedPassword = await bcrypt.hash(data.password,10)

        const user = await authRepository.create({...data, password: hashedPassword})
        return user
    } catch (error) {
        throw new Error("User not created")
    }
}

const login = async(email: string, password: string) => {
    try {
        const user = await authRepository.findOne(email)
        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
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

const getProfile = async(userId: string) => {
    try {
        let user = await authRepository.findById(userId)
        if(!user){
            throw new Error("user not found")
        }
        return {user}
    } catch (error) {
        throw error
    }
}

const refreshToken = async(token: string) => {
    try {
        const payload = await verifyToken(token)
        if(!payload){
            throw new Error("payload not found")
        }

        const user = await authRepository.findById(payload.userId)
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


export const authService = {
    signUp,
    login,
    getProfile,
    refreshToken
}
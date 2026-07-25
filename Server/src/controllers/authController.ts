import { Request, Response, NextFunction } from "express"
import { authService, getProfileService, srefreshToken } from "../services/authService"

export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body
        const { accessToken, refreshToken, role }  = await authService(email, password)
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        })
        res.status(200).json({accessToken, role})
    } catch (error) {
        next()
    }
}

export const home = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({success: true})
    } catch (error) {
        next()
    }
}

export const getProfile = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let userId = (req as any).user.userId
        let {user} = await getProfileService(userId)
        res.status(200).json({user})
    } catch (error) {
        next()
    }
}

export const refreshToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken){
            return res.status(401).json({message: "Refresh Token missing"})
        }
        const accessToken = await srefreshToken(refreshToken)
        res.status(200).json({accessToken})
    } catch (error) {
        next()
    }
}
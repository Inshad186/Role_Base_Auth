import { Request, Response, NextFunction } from "express"
import { authService, sProfile, srefreshToken } from "../services/authService"

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
        res.status(200).json({accessToken, refreshToken, role})
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

export const cProfile = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let userId = (req as any).user.userId
        let {role} = await sProfile(userId)
        res.status(200).json({role})
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
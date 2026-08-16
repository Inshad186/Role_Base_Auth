import { Request, Response, NextFunction } from "express"
import { authService } from "../services/authService"

export const signUp = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {...data} = req.body
        const user = await authService.signUp(data)
        res.status(200).json({user})
    } catch (error) {
        next()
    }
}

export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body
        const { accessToken, refreshToken, role }  = await authService.login(email, password)
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

export const forgotPassword = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body
        await authService.forgotPassword(email)
        res.status(200).json({success: true})
    } catch (error) {
        next()
    }
}

export const verifyOtp = async(req: Request, res: Response, next: NextFunction) =>{
    try {
        const {email, otp} = req.body;
        const resetToken = await authService.verifyOtp(email, otp)
        res.status(200).json({success: true, resetToken})
    } catch (error) {
        next();
    }
}

export const resetPassword = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {token, password} = req.body;
        await authService.resetPassword(token, password)
        res.status(200).json({success: true, message: "Password reset successfully"})
    } catch (error) {
        next();
    }
}

export const getProfile = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let userId = (req as any).user.userId
        let {user} = await authService.getProfile(userId)
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
        const accessToken = await authService.refreshToken(refreshToken)
        res.status(200).json({accessToken})
    } catch (error) {
        next()
    }
}

export const logout = async ( req: Request, res: Response )=> {
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false, 
        sameSite: "strict",
    });
    res.status(200).json({ success: true, message: "Logged out successfully"});
};

export const authController = {
    signUp,
    login,
    forgotPassword,
    verifyOtp,
    resetPassword,
    getProfile,
    refreshToken,
    logout
}
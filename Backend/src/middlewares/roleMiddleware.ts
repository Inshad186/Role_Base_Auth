import { Request, Response, NextFunction } from "express"

const roleMiddleware = (...roles: string[]) => {
    return( req: Request, res: Response, next: NextFunction ) => {
        const user = (req as any).user
        if(!user){
            res.status(401).json({message: "Unauthorized"})
        }
        if(!roles.includes(user.role)){
            res.status(401).json({message: "User role is not found"})
        }
        next()
    }
}

export default roleMiddleware

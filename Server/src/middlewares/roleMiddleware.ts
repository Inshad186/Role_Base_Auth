import { Request, Response, NextFunction } from "express"

const roleMiddleware = (...roles: string[]) => {
    return( req: Request, res: Response, next: NextFunction ) => {
        const user = (req as any).User
        if(!user){
            res.status(401).json({message: "Unauthorized"})
        }

        if(!roles.includes(user.role)){
            res.status(401).json({message: "Forbidden"})
        }
        next()
    }
}

export default roleMiddleware

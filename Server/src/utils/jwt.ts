import jwt from "jsonwebtoken"
interface JwtPayload {
    userId: string,
    role: string
}

export const generateAccessToken = (payload: JwtPayload) => {
    return jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET!,
        {
            expiresIn: "15m"
        }
    )
}

export const generateRefreshToken = (payload: JwtPayload) => {
    return jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET!,
        {
            expiresIn: "7d"
        }
    )
}

export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(
            token,
            process.env.REFRESH_TOKEN_SECRET!
        ) as {userId: string, role: string}
        return decoded;
    } catch (error) {
        console.error("Error decoding token", error)
        throw error
    }
}
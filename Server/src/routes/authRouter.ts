import { Router } from "express";
import { getProfile, home, login, refreshToken } from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";
import roleMiddleware from "../middlewares/roleMiddleware";

const router = Router()

router.post("/login", login)
router.get("/home",authMiddleware, roleMiddleware("CLIENT"), home.bind(home))
router.get("/profile",authMiddleware, getProfile.bind(getProfile))
router.post("/refreshToken", refreshToken.bind(refreshToken))

export default router


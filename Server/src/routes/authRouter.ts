import { Router } from "express";
import { cProfile, home, login, refreshToken } from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";
import roleMiddleware from "../middlewares/roleMiddleware";

const router = Router()

router.post("/login",login)
router.get("/home",authMiddleware, roleMiddleware("CLIENT"), home.bind(home))
router.get("/profile",authMiddleware,cProfile.bind(cProfile))
router.post("/refreshToken", refreshToken.bind(refreshToken))

export default router


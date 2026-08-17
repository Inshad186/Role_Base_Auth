import { Router } from "express";
import { authController } from "../controllers/authController";
import authMiddleware from "../middlewares/authMiddleware";
import roleMiddleware from "../middlewares/roleMiddleware";

const router = Router()

router.post("/signup", authController.signUp.bind(authController));
router.post("/login", authController.login.bind(authController));
router.post("/forgotPassword", authController.forgotPassword.bind(authController));
router.post("/verify_otp", authController.verifyOtp.bind(authController));
router.post("/resetPassword", authController.resetPassword.bind(authController));
router.get("/profile",authMiddleware, roleMiddleware("STUDENT", "INSTRUCTOR"), authController.getProfile.bind(authController));
router.post("/refreshToken", authController.refreshToken.bind(authController));
router.post("/logout", authController.logout.bind(authController));

export default router


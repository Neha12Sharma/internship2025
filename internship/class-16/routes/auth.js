import express from 'express';
import {
    login,
    logout,
    signup,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth,
}
    from './controllers/authController.js';
import { verifyToken } from "../miidleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgotpassword", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;
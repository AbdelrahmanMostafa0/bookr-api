import { Router } from "express";
import * as AuthController from "./auth.controller";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.post("/refresh-token", AuthController.refreshToken);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/reset-password", AuthController.resetPassword);
router.post(
  "/resend-verification-email",
  AuthController.resendVerificationEmail,
);
router.post("/verify-email", AuthController.verifyEmail);

export default router;

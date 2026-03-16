import { Router } from "express";
import * as ProfileController from "./profile.controller";
import { updateUserValidator } from "./profile.validators";
import { authMiddleware, validate } from "../../middlewares";

const router = Router();

router.get("/", authMiddleware, ProfileController.getProfile);
router.put(
  "/",
  authMiddleware,
  validate({ body: updateUserValidator }),
  ProfileController.updateProfile,
);

export default router;

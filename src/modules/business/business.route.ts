import { Router } from "express";
import * as BusinessController from "./business.controller";
import { authMiddleware, validate } from "../../middlewares";
import { createBusinessValidator } from "./business.validators";
const router = Router();

router.get("/", (req, res) => {});
router.post(
  "/create",
  authMiddleware,
  validate({ body: createBusinessValidator }),
  BusinessController.createBusiness,
);

export default router;

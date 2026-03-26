import { Response } from "express";
import { AuthRequest } from "../../types/auth";
import { errorResponse, successResponse } from "../../utils/response";
import * as BusinessService from "./business.service";
import { generateSlug } from "../../utils/slug";
export const createBusiness = async (req: AuthRequest, res: Response) => {
  const { name } = req.body;
  const userId = req.user?.id;
  if (!userId) {
    return errorResponse(res, "User not found", 404);
  }
  try {
    const newBusiness = await BusinessService.createBusiness(userId, name);
    return successResponse(
      res,
      newBusiness,
      "Business Created Successfully",
      201,
    );
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

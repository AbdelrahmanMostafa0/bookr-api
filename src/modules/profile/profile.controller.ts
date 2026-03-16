import { Request, Response } from "express";
import * as ProfileService from "./profile.service";
import { errorResponse, successResponse } from "../../utils/response";
import { AuthRequest } from "../../types/auth";

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await ProfileService.getProfile(req?.user?.id as string);
    return successResponse(res, user, "Profile fetched successfully", 200);
  } catch (error: any) {
    const errCode = error.statusCode || 500;
    const errMessage = error.message || "Internal server error";
    return errorResponse(res, errMessage, errCode);
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await ProfileService.updateProfile(
      req?.user?.id as string,
      req.body,
    );
    return successResponse(res, user, "Profile updated successfully", 200);
  } catch (error: any) {
    const errCode = error.statusCode || 500;
    const errMessage = error.message || "Internal server error";
    return errorResponse(res, errMessage, errCode);
  }
};

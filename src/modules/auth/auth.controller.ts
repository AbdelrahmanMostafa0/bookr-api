import {
  errorResponse,
  successResponse,
  validationErrorResponse,
} from "../../utils/response";
import * as AuthService from "./auth.service";
import { Request, Response } from "express";
import * as AuthValidators from "./auth.validators";
export const register = async (req: Request, res: Response) => {
  const result = AuthValidators.registerValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    const user = await AuthService.registerUser(result.data, res);
    return successResponse(res, user, "User registered successfully", 201);
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const login = async (req: Request, res: Response) => {
  const result = AuthValidators.loginValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    const user = await AuthService.loginUser(result.data, res);
    return successResponse(res, user, "User logged in successfully", 200);
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const logout = async (req: Request, res: Response) => {
  const result = AuthValidators.logoutValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    await AuthService.logoutUser(result.data, res);
    return successResponse(res, null, "User logged out successfully", 200);
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const result = AuthValidators.refreshTokenValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    await AuthService.refreshToken(result.data, res);
    return successResponse(res, null, "User refreshed successfully", 200);
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const result = AuthValidators.forgotPasswordValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    await AuthService.forgotPassword(result.data);
    return successResponse(
      res,
      null,
      "Password reset email sent successfully",
      200,
    );
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const result = AuthValidators.resetPasswordValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    await AuthService.resetPassword(result.data);
    return successResponse(res, null, "Password reset successfully", 200);
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const resendVerificationEmail = async (req: Request, res: Response) => {
  const result = AuthValidators.resendVerificationEmailValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    await AuthService.resendVerificationEmail(result.data.email);
    return successResponse(
      res,
      null,
      "Verification email sent successfully",
      200,
    );
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  const result = AuthValidators.verifyEmailValidator(req.body);
  if (!result.success) {
    return validationErrorResponse(res, result);
  }
  try {
    await AuthService.verifyEmail(result.data.token);
    return successResponse(res, null, "Email verified successfully", 200);
  } catch (error: any) {
    const errorCode = error?.statusCode || 500;
    return errorResponse(res, error?.message, errorCode);
  }
};

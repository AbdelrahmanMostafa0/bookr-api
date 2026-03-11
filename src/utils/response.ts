import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message: string,
  statusCode: number,
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number,
  errors?: any[],
) => {
  res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

export const validationErrorResponse = (res: Response, result: any) => {
  const errors = result.error.issues.map((issue: any) => ({
    field: issue.path[0],
    message: issue.message,
  }));
  return errorResponse(res, "Validation failed", 400, errors);
};

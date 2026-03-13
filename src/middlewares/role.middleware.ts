import { NextFunction, Request, Response } from "express";
import { Role } from "../types/enums";
import { errorResponse } from "../utils/response";

export const requireRole = (...roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return errorResponse(res, "Not authenticated", 401);

    if (!roles.includes(req.user.role as Role)) {
      return errorResponse(res, "Forbidden — insufficient permissions", 403);
    }
    next();
  };
};

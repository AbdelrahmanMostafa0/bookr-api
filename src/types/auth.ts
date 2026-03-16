import { AccessTokenPayload } from "./../utils/token";
import { Request } from "express";
export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

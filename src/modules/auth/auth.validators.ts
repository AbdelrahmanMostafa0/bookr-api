import { z } from "zod";

export const registerValidator = (data: any) => {
  const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string().min(10, "Phone number must be at least 10 digits long"),
  });
  return schema.safeParse(data);
};

export const loginValidator = (data: any) => {
  const schema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  return schema.safeParse(data);
};

export const forgotPasswordValidator = (data: any) => {
  const schema = z.object({
    email: z.email("Invalid email address"),
  });
  return schema.safeParse(data);
};

export const resetPasswordValidator = (data: any) => {
  const schema = z.object({
    token: z.string(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  return schema.safeParse(data);
};

export const resendVerificationEmailValidator = (data: any) => {
  const schema = z.object({
    email: z.email("Invalid email address"),
  });
  return schema.safeParse(data);
};

export const verifyEmailValidator = (data: any) => {
  const schema = z.object({
    token: z.string(),
  });
  return schema.safeParse(data);
};

export const logoutValidator = (data: any) => {
  const schema = z.object({
    userId: z.string(),
  });
  return schema.safeParse(data);
};

export const refreshTokenValidator = (data: any) => {
  const schema = z.object({
    refreshToken: z.string(),
  });
  return schema.safeParse(data);
};

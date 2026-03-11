import userModel from "../../models/user.model";
import {
  ForgotPasswordDto,
  LoginDto,
  LogoutDto,
  RegisterDto,
  ResetPasswordDto,
  RefreshTokenDto,
} from "./auth.types";
import {
  clearAuthCookies,
  generateAccessToken,
  generateRefreshToken,
  setAuthCookies,
  verifyRefreshToken,
} from "../../utils/token";
import { Response } from "express";
import { passwordResetEmail, sendEmail, verificationEmail } from "../../emails";

export const registerUser = async (data: RegisterDto, res: Response) => {
  const { name, email, password, phone } = data;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    throw { message: "User already exists", statusCode: 400 };
  }

  const user = await userModel.create({ name, email, password, phone });
  await sendEmail({
    to: user.email,
    ...verificationEmail(user.name, user.createEmailVerificationToken()),
  });
  const accessToken = generateAccessToken(user._id.toString(), user.role);
  const refreshToken = generateRefreshToken(user._id.toString());
  setAuthCookies(res, accessToken, refreshToken);
  return user;
};

export const loginUser = async (data: LoginDto, res: Response) => {
  const { email, password } = data;
  const user = await userModel.findOne({ email });
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw { message: "Invalid password", statusCode: 401 };
  }
  const accessToken = generateAccessToken(user._id.toString(), user.role);
  const refreshToken = generateRefreshToken(user._id.toString());
  setAuthCookies(res, accessToken, refreshToken);
  return user;
};

export const logoutUser = async (data: LogoutDto, res: Response) => {
  clearAuthCookies(res);
  return { message: "User logged out successfully" };
};

export const refreshToken = async (data: RefreshTokenDto, res: Response) => {
  const { refreshToken } = data;
  const decodedToken = verifyRefreshToken(refreshToken);
  if (!decodedToken) {
    throw { message: "Invalid token", statusCode: 401 };
  }
  const user = await userModel.findById(decodedToken.id);
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }
  const accessToken = generateAccessToken(user._id.toString(), user.role);
  const newRefreshToken = generateRefreshToken(user._id.toString());
  setAuthCookies(res, accessToken, newRefreshToken);
  return user;
};

export const forgotPassword = async (data: ForgotPasswordDto) => {
  const { email } = data;
  const user = await userModel.findOne({ email });
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }
  const resetToken = user.createPasswordResetToken();
  await user.save();
  await sendEmail({
    to: user.email,
    ...passwordResetEmail(user.name, resetToken),
  });
  return { message: "Password reset email sent successfully" };
};

export const resetPassword = async (data: ResetPasswordDto) => {
  const { token, password } = data;
  const user = await userModel.findOne({
    passwordResetToken: token,
    passwordResetExpires: { $gt: new Date() },
  });
  if (!user) {
    throw { message: "Invalid token", statusCode: 401 };
  }
  user.password = password;

  await user.save();
  return { message: "Password reset successfully" };
};

export const resendVerificationEmail = async (email: string) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }
  if (user.isEmailVerified) {
    throw { message: "Email already verified", statusCode: 400 };
  }
  const verificationToken = user.createEmailVerificationToken();
  await user.save();
  await sendEmail({
    to: user.email,
    ...verificationEmail(user.name, verificationToken),
  });
  return { message: "Verification email sent successfully" };
};

export const verifyEmail = async (token: string) => {
  const user = await userModel.findOne({
    emailVerificationToken: token,
    emailVerificationExpires: { $gt: new Date() },
  });
  if (!user) {
    throw { message: "Invalid or expired token", statusCode: 401 };
  }
  user.isEmailVerified = true;
  await user.save();
  return { message: "Email verified successfully" };
};

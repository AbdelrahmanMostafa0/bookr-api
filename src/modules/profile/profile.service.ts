import userModel from "../../models/user.model";

export const getProfile = async (userId: string) => {
  const user = await userModel.findById(userId);
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }
  return user;
};

export const updateProfile = async (userId: string, data: any) => {
  const user = await userModel.findByIdAndUpdate(
    userId,
    { $set: data },
    { new: true, runValidators: true },
  );
  if (!user) {
    throw { message: "User not found", statusCode: 404 };
  }
  return user;
};

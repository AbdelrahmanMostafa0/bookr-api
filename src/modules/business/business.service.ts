import BusinessModel from "../../models/business.model";
import userModel from "../../models/user.model";
import { ApiError } from "../../utils/response";
import { nanoid } from "nanoid";
import { generateSlug } from "../../utils/slug";

export const createBusiness = async (userId: string, name: string) => {
  let slug = generateSlug(name);

  const user = await userModel.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  if (user.subscription.plan === "free") {
    const businessExist = await BusinessModel.findOne({
      ownerId: userId,
    });
    if (businessExist) {
      throw new ApiError(
        403,
        "Free plan allows only 1 business. Upgrade to Pro to create more.",
      );
    }
  }
  const slugExist = await BusinessModel.findOne({ slug });
  if (slugExist) {
    slug = `${slug}-${nanoid(4)}`;
  }
  const newBusiness = await BusinessModel.create({
    ownerId: userId,
    slug,
    name,
  });
  return newBusiness;
};

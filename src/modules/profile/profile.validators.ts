import { z } from "zod";

const updateUserValidator = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name must be at most 100 characters long")
    .optional(),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number")
    .optional(),
  avatar: z.url("Avatar must be a valid URL").optional(),
  bio: z
    .string()
    .trim()
    .max(500, "Bio must be at most 500 characters long")
    .optional(),
});

export { updateUserValidator };

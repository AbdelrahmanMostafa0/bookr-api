import mongoose, { Schema, model, Document } from "mongoose";

export interface IBusiness extends Document {
  ownerId: String;
  name: string;
  slug: string;
  logo?: string;
  currency?: string;
  description?: string;
  website?: string;
  category?: string;
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
  };
  isActive: boolean;
  isPublished: boolean;
  onboardingStep: number;
  workingHours?: {
    monday?: { open: string; close: string; isOff: boolean };
    tuesday?: { open: string; close: string; isOff: boolean };
    wednesday?: { open: string; close: string; isOff: boolean };
    thursday?: { open: string; close: string; isOff: boolean };
    friday?: { open: string; close: string; isOff: boolean };
    saturday?: { open: string; close: string; isOff: boolean };
    sunday?: { open: string; close: string; isOff: boolean };
  };
  createdAt: Date;
  updatedAt: Date;
}

const BusinessSchema = new Schema<IBusiness>(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, trim: true, default: "New Business" },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    category: { type: String, default: null },
    logo: { type: String, default: null },
    currency: { type: String, default: "USD" },
    description: { type: String, default: null },
    website: { type: String, default: null },
    phone: { type: String, default: null },
    email: { type: String, default: null },
    isActive: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: false },
    onboardingStep: { type: Number, default: 1 },
    address: {
      street: { type: String, default: null },
      city: { type: String, default: null },
      state: { type: String, default: null },
      country: { type: String, default: null },
    },
    workingHours: {
      monday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
      tuesday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
      wednesday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
      thursday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
      friday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
      saturday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
      sunday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
        isOff: { type: Boolean, default: false },
      },
    },
  },
  {
    timestamps: true,
  },
);

const BusinessModel = model<IBusiness>("Business", BusinessSchema);

export default BusinessModel;

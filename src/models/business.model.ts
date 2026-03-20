import { Schema, model, Document } from "mongoose";

export interface IBusiness extends Document {
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
  workingHours?: {
    monday?: { open: string; close: string };
    tuesday?: { open: string; close: string };
    wednesday?: { open: string; close: string };
    thursday?: { open: string; close: string };
    friday?: { open: string; close: string };
    saturday?: { open: string; close: string };
    sunday?: { open: string; close: string };
  };
  createdAt: Date;
  updatedAt: Date;
}

const BusinessSchema = new Schema<IBusiness>(
  {
    name: { type: String, required: true, trim: true },
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
      },
      tuesday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
      },
      wednesday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
      },
      thursday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
      },
      friday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
      },
      saturday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
      },
      sunday: {
        open: { type: String, default: null },
        close: { type: String, default: null },
      },
    },
  },
  {
    timestamps: true,
  },
);

const BusinessModel = model<IBusiness>("Business", BusinessSchema);

export default BusinessModel;

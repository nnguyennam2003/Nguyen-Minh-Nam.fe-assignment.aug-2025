import { z } from "zod";

// Step 1: Personal Information
export const step1Schema = z.object({
  name: z.string().nonempty("Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Phone must be at least 8 digits"),
});

// Step 2: Address Information
export const step2Schema = z.object({
  country: z.string().min(2, "Country must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

// Step 3: Additional Information / Preferences
export const step3Schema = z.object({
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  agree: z
    .boolean()
    .refine((val) => val === true, "You must agree to continue"),
});

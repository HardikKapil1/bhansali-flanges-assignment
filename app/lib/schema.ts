import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Enter a valid business email address."),
  phone: z.string().trim().regex(/^[+]?[(]?[0-9]{1,4}[)]?[\s.-]?[0-9\s.-]{6,18}$/, "Enter a valid phone number."),
  productInterest: z.string().min(1, "Please select a product interest."),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

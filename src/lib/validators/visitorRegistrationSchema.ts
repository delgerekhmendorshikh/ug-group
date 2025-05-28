import * as z from "zod";

export type TVisitorRegistrationSchema = z.infer<
  typeof VisitorRegistrationSchema
>;

export const VisitorRegistrationSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters." }),
  email: z.string().email(),
  jobTitle: z.string().min(1, { message: "Job Title is required" }),
  company: z.string().min(1, { message: "Company name is required" }),
});

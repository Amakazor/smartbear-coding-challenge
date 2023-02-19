import { z } from "zod";

const contactSchema = z.object({
    name: z.string().optional(),
    url: z.string().url().optional(),
    email: z.string().email().optional(),
});

const licenseSchema = z.object({
    name: z.string(),
    url: z.string().url().optional(),
});

export const info = z.object({
    title: z.string(),
    description: z.string().optional(),
    termsOfService: z.string().optional(),
    contact: contactSchema.optional(),
    license: licenseSchema.optional(),
    version: z.string(),
});

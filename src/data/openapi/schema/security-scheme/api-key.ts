import { z } from "zod";

export const apiKey = z.object({
    type: z.literal("apiKey"),
    description: z.string().optional(),
    name: z.string(),
    in: z.union([z.literal("query"), z.literal("header")]),
});

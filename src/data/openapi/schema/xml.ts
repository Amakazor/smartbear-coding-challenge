import { z } from "zod";

export const xml = z.object({
    name: z.string().optional(),
    namespace: z.string().optional(),
    prefix: z.string().optional(),
    attribute: z.boolean().optional(),
    wrapped: z.boolean().optional(),
});

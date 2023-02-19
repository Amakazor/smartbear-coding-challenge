import { z } from "zod";

export const basic = z.object({
    type: z.literal("basic"),
    description: z.string().optional(),
});

import { z } from "zod";

import { primitives } from "./primitives";

export const objectBase = z.object({
    type: z.literal("object"),
    required: z.array(z.string()).optional(),
    maxProperties: z.number().optional(),
    minProperties: z.number().optional(),
    additionalProperties: z.union([
        primitives,
        z.boolean(),
        z.object({ $ref: z.string() }),
    ]).optional(),
});

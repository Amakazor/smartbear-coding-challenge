import { z } from "zod";

import { primitiveTypes } from "./primitives";

export const objectBase = z.object({
    type: z.literal("object"),
    required: z.array(z.string()).optional(),
    maxProperties: z.number().optional(),
    minProperties: z.number().optional(),
    additionalProperties: z.union([
        primitiveTypes,
        z.boolean(),
        z.object({ $ref: z.string() }),
    ]).optional(),
});

import { z } from "zod";

import { collectionFormat, collectionFormatMulti } from "../collection-format";

export const arrayBase = z.object({
    type: z.literal("array"),
    maxItems: z.number().optional(),
    minItems: z.number().optional(),
    uniqueItems: z.boolean().optional(),
    collectionFormat: collectionFormat.optional(),
});

export const arrayBaseMulti = z.object({
    type: z.literal("array"),
    maxItems: z.number().optional(),
    minItems: z.number().optional(),
    uniqueItems: z.boolean().optional(),
    collectionFormat: collectionFormatMulti.optional(),
});

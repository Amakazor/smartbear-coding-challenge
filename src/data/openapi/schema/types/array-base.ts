import { z } from "zod";

import { collectionFormat } from "../collection-format";

export const arrayBase = z.object({
    type: z.literal("array"),
    maxItems: z.number().optional(),
    minItems: z.number().optional(),
    uniqueItems: z.boolean().optional(),
    collectionFormat: collectionFormat.optional(),
});

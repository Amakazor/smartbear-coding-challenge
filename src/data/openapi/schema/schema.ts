import { z } from "zod";

import { arrayBase } from "./types/array-base";
import { objectBase } from "./types/object-base";
import { primitives } from "./types/primitives";
import { xml } from "./xml";

const schemaBase = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    example: z.any().optional(),
    xml: xml.optional(),
});


type typeofSchema = z.infer<typeof schemaBase>
    | { $ref: string }
    | (z.infer<typeof arrayBase> & {items: typeofSchema})
    | (z.infer<typeof objectBase> & {properties: Record<string, typeofSchema>})


export const schema: z.ZodType<typeofSchema> = schemaBase.and(z.union([
    primitives,
    z.object({ $ref: z.string() }),
    arrayBase.extend({ items: z.lazy(() => schema) }),
    objectBase.extend({ properties: z.record(z.string(), z.lazy(() => schema)) }),
]));


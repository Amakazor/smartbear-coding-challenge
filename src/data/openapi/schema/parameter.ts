import { z } from "zod";

import { itemsMulti, itemsWithFile } from "./items";
import { schema } from "./schema";

const parameterBase = z.object({
    name: z.string(),
    description: z.string().optional(),
    required: z.boolean().optional(),
});

const parameterInBody = parameterBase.extend({
    in: z.literal("body"),
    schema: schema,
}).and(z.object({}));

export const parameterInQuery = parameterBase
    .and(itemsMulti)
    .and(z.object({
        in: z.literal("query"),
        allowEmptyValue: z.boolean().optional(),
    }));

const parameterInHeader = parameterBase
    .and(itemsMulti)
    .and(z.object({ in: z.literal("header") }));

const parameterInFormData = parameterBase
    .and(itemsWithFile)
    .and(z.object({ in: z.literal("formData") }));

const parameterInPath = parameterBase.extend({
    in: z.literal("path"),
    required: z.literal(true),
});

export const parameter = z.union([
    parameterInBody,
    parameterInQuery,
    parameterInHeader,
    parameterInFormData,
    parameterInPath,
]);

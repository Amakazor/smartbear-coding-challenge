import { z } from "zod";

import { collectionFormatMulti } from "./collection-format";
import { items, itemsWithFile } from "./items";
import { schema } from "./schema";

const parameterBase = z.object({
    name: z.string(),
    description: z.string().optional(),
    required: z.boolean().optional(),
});

const parameterInBody = parameterBase.extend({
    in: z.literal("body"),
    schema: schema,
});

const parameterInQuery = parameterBase
    .and(items)
    .and(z.object({
        in: z.literal("query"),
        allowEmptyValue: z.boolean().optional(),
        collectionFormat: collectionFormatMulti.optional(),
    }));

const parameterInHeader = parameterBase
    .and(items)
    .and(z.object({
        in: z.literal("header"),
        collectionFormat: collectionFormatMulti.optional(),
    }));

const parameterInFormData = parameterBase
    .and(itemsWithFile)
    .and(z.object({
        in: z.literal("formData"),
        collectionFormat: collectionFormatMulti.optional(),
    }));

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

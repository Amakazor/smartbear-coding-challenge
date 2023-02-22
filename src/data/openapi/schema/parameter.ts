import { arrayBaseMulti } from "@data/openapi/schema/types/array-base";
import { file } from "@data/openapi/schema/types/file";
import { boolean, integer, number, string } from "@data/openapi/schema/types/primitives";
import { z } from "zod";

import { itemsMulti, itemsWithFileMulti } from "./items";
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


const parameterInQueryBase = parameterBase.extend({
    in: z.literal("query"),
    allowEmptyValue: z.boolean().optional(),
});

const parameterInQuery = z.union([
    parameterInQueryBase.merge(boolean),
    parameterInQueryBase.merge(string),
    parameterInQueryBase.merge(integer),
    parameterInQueryBase.merge(number),
    parameterInQueryBase.merge(arrayBaseMulti.extend({ items: z.lazy(() => itemsMulti) })),
]);

const parameterInHeaderBase = parameterBase.extend({ in: z.literal("header") });

const parameterInHeader = z.union([
    parameterInHeaderBase.merge(boolean),
    parameterInHeaderBase.merge(string),
    parameterInHeaderBase.merge(integer),
    parameterInHeaderBase.merge(number),
    parameterInHeaderBase.merge(arrayBaseMulti.extend({ items: z.lazy(() => itemsMulti) })),
]);

const parameterInFormDataBase = parameterBase.extend({ in: z.literal("formData") });

const parameterInFormData = z.union([
    parameterInFormDataBase.merge(boolean),
    parameterInFormDataBase.merge(string),
    parameterInFormDataBase.merge(integer),
    parameterInFormDataBase.merge(number),
    parameterInFormDataBase.merge(file),
    parameterInFormDataBase.merge(arrayBaseMulti.extend({ items: z.lazy(() => itemsWithFileMulti) })),
]);

const parameterInPathBase = parameterBase.extend({
    in: z.literal("path"),
    required: z.literal(true),
});

const parameterInPath = z.union([
    parameterInPathBase.merge(boolean),
    parameterInPathBase.merge(string),
    parameterInPathBase.merge(integer),
    parameterInPathBase.merge(number),
]);

export const parameter = z.union([
    parameterInBody,
    parameterInQuery,
    parameterInHeader,
    parameterInFormData,
    parameterInPath,
]);

const parameterOrRef = z.union([parameter, z.object({ $ref: z.string() })]);

export const parameters = z.array(parameterOrRef);

export type Parameter = z.infer<typeof parameter>;
export type ParameterOrRef = z.infer<typeof parameterOrRef>;
export type Parameters = z.infer<typeof parameters>;

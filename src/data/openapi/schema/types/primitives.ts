import { z } from "zod";

const baseNumericProperties = z.object({
    maximum: z.number().optional(),
    exclusiveMaximum: z.boolean().optional(),
    minimum: z.number().optional(),
    exclusiveMinimum: z.boolean().optional(),
    multipleOf: z.number().gt(0).optional(),
});

export const integer = baseNumericProperties.extend({
    type: z.literal("integer"),
    format: z.union([z.literal("int32"), z.literal("int64")]).optional(),
    enum: z.array(z.number().int()).optional(),
    default: z.number().int().optional(),
});

export const number = baseNumericProperties.extend({
    type: z.literal("number"),
    format: z.union([z.literal("float"), z.literal("double")]).optional(),
    enum: z.array(z.number()).optional(),
    default: z.number().optional(),
});

export const string = z.object({
    type: z.literal("string"),
    format: z.union([
        z.literal("byte"),
        z.literal("binary"),
        z.literal("date"),
        z.literal("date-time"),
        z.literal("password"),
    ]).optional(),
    maxLength: z.number().optional(),
    minLength: z.number().optional(),
    pattern: z.string().optional(),
    enum: z.array(z.string()).optional(),
    default: z.string().optional(),
});

export const boolean = z.object({
    type: z.literal("boolean"),
    enum: z.array(z.boolean()).optional(),
    default: z.boolean().optional(),
});

export const primitives = z.union([
    integer,
    number,
    string,
    boolean,
]);

export const primitiveTypes = z.union([
    integer.pick({ type: true }),
    number.pick({ type: true }),
    string.pick({ type: true }),
    boolean.pick({ type: true }),
]);

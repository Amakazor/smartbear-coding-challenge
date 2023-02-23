import { z } from "zod";

import { externalDocumentation } from "./external-documentation";
import { parameter, parameters } from "./parameter";
import { responses } from "./responses";

// A false positive, but it's not worth disabling the rule for the whole file
// eslint-disable-next-line no-shadow
export enum OperationMethod {
    get = "get",
    put = "put",
    post = "post",
    delete = "delete",
    options = "options",
    head = "head",
    patch = "patch",
}

const operation = z.object({
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    description: z.string().optional(),
    externalDocs: externalDocumentation.optional(),
    operationId: z.string().optional(),
    consumes: z.array(z.string()).optional(),
    produces: z.array(z.string()).optional(),
    parameters: parameters.optional(),
    responses: responses,
    schemes: z.array(z.union([z.literal("http"), z.literal("https"), z.literal("ws"), z.literal("wss")])).optional(),
    deprecated: z.boolean().optional(),
    security: z.array(z.record(z.string(), z.array(z.string()))).optional(),
});

const path = z.object({
    $ref: z.string().optional(),
    parameters: z.array(z.union([parameter, z.object({ $ref: z.string() })])).optional(),
    [OperationMethod.get]    : operation.optional(),
    [OperationMethod.put]    : operation.optional(),
    [OperationMethod.post]   : operation.optional(),
    [OperationMethod.delete] : operation.optional(),
    [OperationMethod.options]: operation.optional(),
    [OperationMethod.head]   : operation.optional(),
    [OperationMethod.patch]  : operation.optional(),
});

export const paths = z.record(z.string().startsWith("/"), path);

export type Operation = z.infer<typeof operation>;
export type Path = z.infer<typeof path>;
export type Paths = z.infer<typeof paths>;

import { z } from "zod";

import { externalDocumentation } from "./external-documentation";
import { parameter, parameters } from "./parameter";
import { responses } from "./responses";

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

export enum OperationMethod {
    get = "get",
    put = "put",
    post = "post",
    delete = "delete",
    options = "options",
    head = "head",
    patch = "patch",
}

const path = z.object({
    $ref: z.string().optional(),
    parameters: z.array(z.union([parameter, z.object({ $ref: z.string() })])).optional(),
}).and(z.record(z.nativeEnum(OperationMethod), operation));

export const paths = z.record(z.string().startsWith("/"), path);

export type Operation = z.infer<typeof operation>;
export type Path = z.infer<typeof path>;
export type Paths = z.infer<typeof paths>;

import { z } from "zod";

import { externalDocumentation } from "./external-documentation";
import { parameter } from "./parameter";
import { responses } from "./responses";

const operation = z.object({
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    description: z.string().optional(),
    externalDocs: externalDocumentation.optional(),
    operationId: z.string().optional(),
    consumes: z.array(z.string()).optional(),
    produces: z.array(z.string()).optional(),
    parameters: z.array(z.union([parameter, z.object({ $ref: z.string() })])).optional(),
    responses: responses,
    schemes: z.array(z.union([z.literal("http"), z.literal("https"), z.literal("ws"), z.literal("wss")])).optional(),
    deprecated: z.boolean().optional(),
    security: z.array(z.record(z.string(), z.array(z.string()))).optional(),
});

const path = z.object({
    $ref: z.string().optional(),
    get: operation.optional(),
    put: operation.optional(),
    post: operation.optional(),
    delete: operation.optional(),
    options: operation.optional(),
    head: operation.optional(),
    patch: operation.optional(),
    parameters: z.array(z.union([parameter, z.object({ $ref: z.string() })])).optional(),
});

export const paths = z.record(z.string().startsWith("/"), path);

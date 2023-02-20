import { z } from "zod";

import { info } from "./info";
import { paths } from "./paths";
import { schema } from "./schema";
import { securityDefinitions } from "./security-definitions";
import { tags } from "./tags";

export const openApi = z.object({
    swagger: z.literal("2.0"),
    info: info,
    host: z.string().optional(),
    basePath: z.string().optional(),
    schemes: z.array(z.union([z.literal("http"), z.literal("https"), z.literal("ws"), z.literal("wss")])).optional(),
    consumes: z.array(z.string()).optional(),
    produces: z.array(z.string()).optional(),
    paths: paths,
    definitions: z.record(z.string(), schema).optional(),
    securityDefinitions: securityDefinitions.optional(),
    security: z.record(z.string(), z.array(z.string())).optional(),
    tags: tags.optional(),
});

export type OpenApiSchema = z.infer<typeof openApi>;

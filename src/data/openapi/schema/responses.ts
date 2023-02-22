import { headers } from "@data/openapi/schema/headers";
import { schema } from "@data/openapi/schema/schema";
import { statusCode } from "@data/openapi/schema/status-code";
import { z } from "zod";

const response = z.object({
    description: z.string(),
    schema: schema.optional(),
    headers: headers.optional(),
    examples: z.record(z.string(), z.any()).optional(),
});

export const responses = z.record(statusCode, response);

export type Response = z.infer<typeof response>;
export type Responses = z.infer<typeof responses>;

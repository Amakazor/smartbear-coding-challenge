import { environment } from "@utility/environment";
import { z } from "zod";

import { fetcher } from "../../fetchers/fetcher";
import { swagger } from "../schema/swagger";

const OpenapiRequestSchema = z.void();
const OpenapiResponseSchema = swagger;

export const fetchApiSpec = fetcher<
    z.infer<typeof OpenapiRequestSchema>,
    z.infer<typeof OpenapiResponseSchema>
>({
    baseUrl: environment.apiUrl,
    path: environment.apiSchemaPath,
    requestSchema: OpenapiRequestSchema,
    responseSchema: OpenapiResponseSchema,
});

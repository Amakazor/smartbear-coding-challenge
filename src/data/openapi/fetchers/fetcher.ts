import { environment } from "@utility/environment";
import { z } from "zod";

import { fetcher } from "../../fetchers/fetcher";
import { openApi } from "../schema/open-api";

const OpenapiRequestSchema = z.void();
export const OpenapiResponseSchema = openApi;

export const fetchApiSpec = fetcher<
    z.infer<typeof OpenapiRequestSchema>,
    z.infer<typeof OpenapiResponseSchema>
>({
    baseUrl: environment.apiUrl,
    path: environment.apiSchemaPath,
    requestSchema: OpenapiRequestSchema,
    responseSchema: OpenapiResponseSchema,
});

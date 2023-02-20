import { fetchApiSpec, OpenapiResponseSchema } from "@data/openapi/fetchers/fetcher";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { z } from "zod";

export enum OpenApiDataState {
    Loading = "loading",
    FetchingError = "fetchingError",
    ParsingError = "parsingError",
    Success = "success",
}

export type OpenApiData = {
    state: OpenApiDataState.Loading;
} | {
    state: OpenApiDataState.FetchingError;
    error: unknown;
} | {
    state: OpenApiDataState.ParsingError;
    error: z.ZodError;
} | {
    state: OpenApiDataState.Success;
    data: z.infer<typeof OpenapiResponseSchema>;
};

export const useOpenApi = ():OpenApiData => {
    const [currentResult, setCurrentResult] = useState<OpenApiData>({ state: OpenApiDataState.Loading });

    const result = useQuery("api-spec", () => fetchApiSpec());

    useEffect(() => {
        setCurrentResult(() => {
            if (result.isLoading)
                return { state: OpenApiDataState.Loading };

            if (result.isError)
                return {
                    state: OpenApiDataState.FetchingError,
                    error: result.error,
                };

            if (result.isSuccess && !result.data.success)
                return {
                    state: OpenApiDataState.ParsingError,
                    error: result.data.error,
                };

            if (result.isSuccess && result.data.success)
                return {
                    state: OpenApiDataState.Success,
                    data: result.data.data,
                };

            return {
                state: OpenApiDataState.FetchingError,
                error: null,
            };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.status]);

    return currentResult;
};

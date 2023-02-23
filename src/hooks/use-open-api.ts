import { fetchApiSpec, OpenapiResponseSchema } from "@data/openapi/fetchers/fetcher";
import { DataState } from "@utility/data-state";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { z } from "zod";

export type OpenApiData = {
    state: DataState.Loading;
} | {
    state: DataState.FetchingError;
    error: unknown;
} | {
    state: DataState.ParsingError;
    error: z.ZodError;
} | {
    state: DataState.Success;
    data: z.infer<typeof OpenapiResponseSchema>;
};

export const useOpenApi = ():OpenApiData => {
    const [currentResult, setCurrentResult] = useState<OpenApiData>({ state: DataState.Loading });

    const result = useQuery("api-spec", () => fetchApiSpec());

    useEffect(() => {
        setCurrentResult(() => {
            if (result.isLoading) return { state: DataState.Loading };

            if (result.isError) return {
                state: DataState.FetchingError,
                error: result.error,
            };

            if (result.isSuccess && !result.data.success) return {
                state: DataState.ParsingError,
                error: result.data.error,
            };

            if (result.isSuccess && result.data.success) return {
                state: DataState.Success,
                data: result.data.data,
            };

            return {
                state: DataState.FetchingError,
                error: null,
            };
        });

        // These are the dependencies that we want to watch for changes. Others would cause the effect to run when it's unnecessary.
        // eslint-disable-next-line
    }, [result.status, result.dataUpdatedAt, result.errorUpdatedAt]);

    return currentResult;
};

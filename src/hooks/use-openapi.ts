import { fetchApiSpec, OpenapiResponseSchema } from "@data/openapi/fetchers/fetcher";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { z } from "zod";

export enum OpenapiFetchingState {
    Loading = "loading",
    FetchingError = "fetchingError",
    ParsingError = "parsingError",
    Success = "success",
}

export type OpenapiData = {
    state: OpenapiFetchingState.Loading;
} | {
    state: OpenapiFetchingState.FetchingError;
    error: unknown;
} | {
    state: OpenapiFetchingState.ParsingError;
    error: z.ZodError;
} | {
    state: OpenapiFetchingState.Success;
    data: z.infer<typeof OpenapiResponseSchema>;
};

export const useOpenapi = ():OpenapiData => {
    const [currentResult, setCurrentResult] = useState<OpenapiData>({ state: OpenapiFetchingState.Loading });

    const result = useQuery("api-spec", () => fetchApiSpec());

    useEffect(() => {
        setCurrentResult(() => {
            if (result.isLoading)
                return { state: OpenapiFetchingState.Loading };

            if (result.isError)
                return {
                    state: OpenapiFetchingState.FetchingError,
                    error: result.error,
                };

            if (result.isSuccess && !result.data.success)
                return {
                    state: OpenapiFetchingState.ParsingError,
                    error: result.data.error,
                };

            if (result.isSuccess && result.data.success)
                return {
                    state: OpenapiFetchingState.Success,
                    data: result.data.data,
                };

            return {
                state: OpenapiFetchingState.FetchingError,
                error: null,
            };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.status]);

    return currentResult;
};

import { OpenApi } from "@data/openapi/models/open-api";
import { DataState } from "@utility/data-state";
import { createContext } from "react";

export const openApiContext = createContext<{apiData: OpenApi, state: DataState}>({
    apiData: OpenApi.Empty,
    state: DataState.Loading,
});

export const OpenApiContextProvider = openApiContext.Provider;

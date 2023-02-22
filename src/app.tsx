import { Router } from "@components/router";
import { OpenApiContextProvider } from "@context/.";
import { OpenApi } from "@data/openapi/models/open-api";
import { useOpenApi } from "@hooks";
import React from "react";

export const App = () => {
    const openApiData = useOpenApi();

    return (
        <OpenApiContextProvider value={{
            apiData: OpenApi.FromOpenApiData(openApiData),
            state: openApiData.state,
        }}>
            <Router/>
        </OpenApiContextProvider>
    );
};

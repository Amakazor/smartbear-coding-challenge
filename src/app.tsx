import { Router } from "@components/router";
import { OpenApiContextProvider } from "@context/open-api-context";
import { OpenApi } from "@data/openapi/models/open-api";
import { useOpenApi } from "@hooks/use-open-api";
import React from "react";

export const App = () => {
    return (
        <OpenApiContextProvider value={OpenApi.FromOpenApiData(useOpenApi())}>
            <Router/>
        </OpenApiContextProvider>
    );
};

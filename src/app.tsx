import { Router } from "@components/router";
import { OpenApiDataContextProvider } from "@context/open-api-data-context";
import { useOpenapi } from "@hooks/use-openapi";
import React from "react";


export const App = () => (
    <OpenApiDataContextProvider value={useOpenapi()}>
        <Router/>
    </OpenApiDataContextProvider>
);

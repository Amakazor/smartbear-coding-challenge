import { OpenapiData, OpenapiFetchingState } from "@hooks/use-openapi";
import { createContext } from "react";


export const openApiDataContext = createContext<OpenapiData>({ state: OpenapiFetchingState.Loading });

export const OpenApiDataContextProvider = openApiDataContext.Provider;

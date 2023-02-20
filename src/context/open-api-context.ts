import { OpenApi } from "@data/openapi/models/open-api";
import { createContext } from "react";

export const openApiContext = createContext<OpenApi>(OpenApi.Empty);
export const OpenApiContextProvider = openApiContext.Provider;

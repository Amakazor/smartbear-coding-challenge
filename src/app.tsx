import { Router } from "@components";
import { OpenApiContextProvider } from "@context/.";
import { OpenApi } from "@data/openapi/models/open-api";
import { useOpenApi } from "@hooks";

export const App = () => {
    const openApiData = useOpenApi();

    return (
        <OpenApiContextProvider value={{
            apiData: OpenApi.fromOpenApiData(openApiData),
            state: openApiData.state,
        }}>
            <Router/>
        </OpenApiContextProvider>
    );
};

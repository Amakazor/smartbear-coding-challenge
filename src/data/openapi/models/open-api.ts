import { OpenApiData, OpenApiDataState } from "@hooks/use-open-api";

import { OpenApiSchema } from "../schema/open-api";

export class OpenApi {
    constructor(private _dto: OpenApiSchema) {}

    get PathNames(): string[] {
        return Object.keys(this._dto.paths);
    }

    get TagNames(): string[] {
        return this._dto.tags?.map(tag => tag.name) ?? [];
    }

    get DefinitionNames(): string[] {
        return Object.keys(this._dto.definitions ?? {});
    }

    get SecurityDefinitionNames(): string[] {
        return Object.keys(this._dto.securityDefinitions ?? {});
    }

    static Empty = new OpenApi({
        swagger: "2.0",
        info: {
            version: "1.0.0",
            title: "empty",
        },
        paths: {},
    });

    static FromOpenApiData = (openApiData: OpenApiData) => openApiData.state === OpenApiDataState.Success ? new OpenApi(openApiData.data) : OpenApi.Empty;
}

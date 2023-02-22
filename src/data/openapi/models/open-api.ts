import { Parameter, ParameterOrRef, Parameters } from "@data/openapi/schema/parameter";
import { Operation, OperationMethod, Path } from "@data/openapi/schema/paths";
import { OpenApiData } from "@hooks/.";
import { DataState } from "@utility/data-state";

import { OpenApiSchema } from "../schema/open-api";

export type NamedOperation = [
    OperationMethod,
    Operation
]

export class OpenApi {
    constructor(private _dto: OpenApiSchema) {}

    get PathNames(): string[] {
        return Object.keys(this._dto.paths);
    }

    get Paths() {
        return this._dto.paths;
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

    static FromOpenApiData = (openApiData: OpenApiData) => openApiData.state === DataState.Success ? new OpenApi(openApiData.data) : OpenApi.Empty;

    private static IsNamedOperation = (entry: [string, unknown]): entry is NamedOperation => entry[0] in OperationMethod;

    static ExtractOperationsFromPath = (path: Path): NamedOperation[] => Object
        .entries(path)
        .filter(OpenApi.IsNamedOperation);

    static ParameterIsRef = (parameter: ParameterOrRef): parameter is { $ref: string } => parameter && "$ref" in parameter;
    static ParameterIsNotRef = (parameter: ParameterOrRef): parameter is Parameter => parameter && !("$ref" in parameter);

    static GroupParameters = (parameters: Parameters) => {
        const nonRefParameters   = parameters.filter(OpenApi.ParameterIsNotRef);
        const refParameters      = parameters.filter(OpenApi.ParameterIsRef);

        const pathParameters     = nonRefParameters.filter(parameter => parameter.in === "path");
        const queryParameters    = nonRefParameters.filter(parameter => parameter.in === "query");
        const headerParameters   = nonRefParameters.filter(parameter => parameter.in === "header");
        const bodyParameters     = nonRefParameters.filter(parameter => parameter.in === "body");
        const formDataParameters = nonRefParameters.filter(parameter => parameter.in === "formData");

        return {
            refParameters,
            pathParameters,
            queryParameters,
            headerParameters,
            bodyParameters,
            formDataParameters,
        };
    };

    static HumanizeParameterGroupName = (groupName: ParameterGroupName) => {
        switch (groupName) {
        case "refParameters": return "Reference Parameters";
        case "pathParameters": return "Path Parameters";
        case "queryParameters": return "Query Parameters";
        case "headerParameters": return "Header Parameters";
        case "bodyParameters": return "Body Parameters";
        case "formDataParameters": return "Form Parameters";
        }
    };
}

export type ParameterGroupName = keyof ReturnType<typeof OpenApi.GroupParameters>;

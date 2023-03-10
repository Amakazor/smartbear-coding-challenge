import { Parameter, ParameterOrRef, Parameters } from "@data/openapi/schema/parameter";
import { Operation, OperationMethod, Path, Paths } from "@data/openapi/schema/paths";
import { OpenApiData } from "@hooks";
import { DataState } from "@utility/data-state";
import { toPairs } from "lodash";

import { OpenApiSchema } from "../schema/open-api";

export type NamedOperation = [
    OperationMethod,
    Operation
]

export type PathBaseData = Path["parameters"] | Path["$ref"]

export class OpenApi {
    constructor(private dto: OpenApiSchema) {}

    get PathNames(): string[] {
        return Object.keys(this.dto.paths);
    }

    get Paths() {
        return this.dto.paths;
    }

    get PathsByTags(): Record<string, Paths> {
        const pathsByTags = this.TagNames?.reduce((tags, tag) => {
            tags[tag] = {};
            return tags;
        }, {} as Record<string, Paths>) ?? {};

        for (const [pathName, path] of toPairs(this.Paths)) {
            for (const [operationName, operation] of OpenApi.extractOperationsFromPath(path)) {
                for (const tag of operation.tags ?? []) {
                    if (pathsByTags[tag][pathName] === undefined) {
                        pathsByTags[tag][pathName] = {
                            ...OpenApi.extractBaseDataFromPath(path),
                            [operationName]: operation,
                        };
                    } else {
                        pathsByTags[tag][pathName] = {
                            ...pathsByTags[tag][pathName],
                            [operationName]: operation,
                        };
                    }
                }
            }
        }

        return pathsByTags;
    }

    get TagNames(): string[] {
        return this.dto.tags?.map(tag => tag.name) ?? [];
    }

    get DefinitionNames(): string[] {
        return Object.keys(this.dto.definitions ?? {});
    }

    get Definitions () {
        return this.dto.definitions;
    }

    get Description() {
        return this.dto.info.description;
    }

    get Title() {
        return this.dto.info.title;
    }

    get Contact() {
        return this.dto.info.contact;
    }

    get License() {
        return this.dto.info.license;
    }

    get TermsOfService() {
        return this.dto.info.termsOfService;
    }

    static Empty = new OpenApi({
        swagger: "2.0",
        info: {
            version: "1.0.0",
            title: "empty",
        },
        paths: {},
    });

    static fromOpenApiData = (openApiData: OpenApiData) => openApiData.state === DataState.Success ? new OpenApi(openApiData.data) : OpenApi.Empty;

    private static IsNamedOperation = (entry: [string | OperationMethod, unknown]): entry is NamedOperation => entry[0] in OperationMethod;

    static extractOperationsFromPath = (path: Path): NamedOperation[] => toPairs(path).filter(OpenApi.IsNamedOperation);

    static extractBaseDataFromPath = (path: Path): Record<string, PathBaseData> => ({
        "$ref": path.$ref,
        "parameters": path.parameters,
    });

    static ParameterIsRef = (parameter: ParameterOrRef): parameter is { $ref: string } => parameter && "$ref" in parameter;
    static ParameterIsNotRef = (parameter: ParameterOrRef): parameter is Parameter => parameter && !("$ref" in parameter);

    static groupParameters = (parameters: Parameters) => {
        const nonRefParameters = parameters.filter(OpenApi.ParameterIsNotRef);
        const refParameters = parameters.filter(OpenApi.ParameterIsRef);

        const pathParameters = nonRefParameters.filter(parameter => parameter.in === "path");
        const queryParameters = nonRefParameters.filter(parameter => parameter.in === "query");
        const headerParameters = nonRefParameters.filter(parameter => parameter.in === "header");
        const bodyParameters = nonRefParameters.filter(parameter => parameter.in === "body");
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

    static humanizeParameterGroupName = (groupName: ParameterGroupName) => {
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

export type ParameterGroupName = keyof ReturnType<typeof OpenApi.groupParameters>;

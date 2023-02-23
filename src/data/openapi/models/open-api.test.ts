import { OpenApi } from "@data/openapi/models/open-api";
import { openApi } from "@data/openapi/schema/open-api";
import { openApiFixture } from "@data/openapi/schema/open-api-fixture";
import { Parameters } from "@data/openapi/schema/parameter";
import { Operation } from "@data/openapi/schema/paths";

const dto = openApi.parse(openApiFixture);

describe("OpenApi Model", () => {
    it("should be able to create a new OpenApi model", () => {
        const model = new OpenApi(dto);
        expect(model).toBeDefined();
    });
    describe("PathNames", () => {
        it("should return the path names", () => {
            const model = new OpenApi(dto);
            expect(model.PathNames).toEqual(["/a", "/b", "/c/{a}"]);
        });
    });
    describe("Paths", () => {
        it("should return the paths", () => {
            const model = new OpenApi(dto);
            expect(model.Paths).toEqual(dto.paths);
        });
    });
    describe("PathsByTags", () => {
        it("should return the paths by tags", () => {
            const model = new OpenApi(dto);
            expect(model.PathsByTags).toEqual({
                "a":  {
                    "/a":  {
                        "$ref": undefined,
                        "get":  {
                            "description": "a",
                            "parameters":  [
                                {
                                    "description": "a",
                                    "in": "query",
                                    "name": "a",
                                    "required": true,
                                    "type": "string",
                                },
                            ],
                            "responses":  {
                                "200":  {
                                    "description": "a response",
                                    "examples":  {},
                                    "headers":  {
                                        "a":  {
                                            "description": "a",
                                            "format": "binary",
                                            "type": "string",
                                        },
                                    },
                                    "schema":  { "type": "string" },
                                },
                                "201":  {
                                    "description": "a response",
                                    "headers":  {
                                        "a":  {
                                            "description": "a",
                                            "format": "binary",
                                            "type": "string",
                                        },
                                    },
                                    "schema":  { "type": "string" },
                                },
                            },
                            "tags":  [
                                "a",
                            ],
                        },
                        "parameters": undefined,
                    },
                    "/b":  {
                        "$ref": undefined,
                        "get":  {
                            "description": "a",
                            "parameters":  [
                                {
                                    "description": "a",
                                    "in": "query",
                                    "name": "a",
                                    "required": true,
                                    "type": "string",
                                },
                                {
                                    "description": "a",
                                    "in": "query",
                                    "name": "b",
                                    "required": true,
                                    "type": "string",
                                },
                                {
                                    "description": "a",
                                    "in": "body",
                                    "name": "c",
                                    "required": true,
                                    "schema":  {
                                        "additionalProperties":  { "type": "boolean" },
                                        "properties":  { "a":  { "type": "string" } },
                                        "required":  [
                                            "a",
                                        ],
                                        "type": "object",
                                    },
                                },
                            ],
                            "responses":  {
                                "200":  {
                                    "description": "a response",
                                    "headers":  {
                                        "a":  {
                                            "description": "a",
                                            "format": "binary",
                                            "type": "string",
                                        },
                                    },
                                    "schema":  { "type": "string" },
                                },
                            },
                            "tags":  [
                                "a",
                            ],
                        },
                        "parameters": undefined,
                    },
                    "/c/{a}":  {
                        "$ref": undefined,
                        "get":  {
                            "description": "a",
                            "parameters":  [
                                {
                                    "description": "a",
                                    "in": "path",
                                    "name": "a",
                                    "required": true,
                                    "type": "string",
                                },
                                {
                                    "description": "a",
                                    "in": "body",
                                    "name": "b",
                                    "required": true,
                                    "schema":  { "$ref": "#/definitions/a" },
                                },
                            ],
                            "responses":  {
                                "default":  {
                                    "description": "a response",
                                    "headers":  {
                                        "a":  {
                                            "description": "a",
                                            "format": "binary",
                                            "type": "string",
                                        },
                                    },
                                    "schema":  { "type": "string" },
                                },
                            },
                            "tags":  [
                                "a",
                            ],
                        },
                        "parameters": undefined,
                    },
                },
                "b":  {},
            });
        });
    });
    describe("TagNames", () => {
        it("should return the tags", () => {
            const model = new OpenApi(dto);
            expect(model.TagNames).toEqual([ "a", "b" ]);
        });
    });
    describe("DefinitionNames", () => {
        it("should return the definition names", () => {
            const model = new OpenApi(dto);
            expect(model.DefinitionNames).toEqual([ "a", "b" ]);
        });
    });
    describe("Definitions", () => {
        it("should return the definitions", () => {
            const model = new OpenApi(dto);
            expect(model.Definitions).toEqual(dto.definitions);
        });
    });
    describe("Description", () => {
        it("should return the description", () => {
            const model = new OpenApi(dto);
            expect(model.Description).toEqual(dto.info.description);
        });
    });
    describe("Title", () => {
        it("should return the title", () => {
            const model = new OpenApi(dto);
            expect(model.Title).toEqual(dto.info.title);
        });
    });
    describe("License", () => {
        it("should return the License", () => {
            const model = new OpenApi(dto);
            expect(model.License).toEqual(dto.info.license);
        });
    });
    describe("TermsOfService", () => {
        it("should return the terms of service", () => {
            const model = new OpenApi(dto);
            expect(model.TermsOfService).toEqual(dto.info.termsOfService);
        });
    });
    describe("Contact", () => {
        it("should return the contact", () => {
            const model = new OpenApi(dto);
            expect(model.Contact).toEqual(dto.info.contact);
        });
    });
    describe("Empty", () => {
        it("should create model as empty as possible", () => {
            const model = OpenApi.Empty;

            expect(model.Definitions).toEqual(undefined);
            expect(model.Paths).toEqual({});
            expect(model.TagNames).toEqual([]);
            expect(model.DefinitionNames).toEqual([]);
            expect(model.Description).toEqual(undefined);
            expect(model.Title).toEqual("empty");
            expect(model.License).toEqual(undefined);
            expect(model.TermsOfService).toEqual(undefined);
            expect(model.Contact).toEqual(undefined);

        });
    });
    describe("extractOperationsFromPath", () => {
        it("should return the operations", () => {
            const model = new OpenApi(dto);
            const path = model.Paths["/a"];
            expect(OpenApi.extractOperationsFromPath(path)).toEqual([
                [
                    "get",
                    {
                        "description": "a",
                        "parameters":  [
                            {
                                "description": "a",
                                "in": "query",
                                "name": "a",
                                "required": true,
                                "type": "string",
                            },
                        ],
                        "responses":  {
                            "200":  {
                                "description": "a response",
                                "examples":  {},
                                "headers":  {
                                    "a":  {
                                        "description": "a",
                                        "format": "binary",
                                        "type": "string",
                                    },
                                },
                                "schema":  { "type": "string" },
                            },
                            "201":  {
                                "description": "a response",
                                "headers":  {
                                    "a":  {
                                        "description": "a",
                                        "format": "binary",
                                        "type": "string",
                                    },
                                },
                                "schema":  { "type": "string" },
                            },
                        },
                        "tags":  [
                            "a",
                        ],
                    },
                ],
                [
                    "post",
                    {
                        "description": "a",
                        "parameters":  [
                            {
                                "description": "a",
                                "in": "body",
                                "name": "a",
                                "required": true,
                                "schema":  { "type": "string" },
                            },
                        ],
                        "responses":  {
                            "200":  {
                                "description": "a response",
                                "examples":  {},
                                "headers":  {
                                    "a":  {
                                        "description": "a",
                                        "format": "binary",
                                        "type": "string",
                                    },
                                },
                                "schema":  { "type": "string" },
                            },
                            "201":  {
                                "description": "a response",
                                "headers":  {
                                    "a":  {
                                        "description": "a",
                                        "format": "binary",
                                        "type": "string",
                                    },
                                },
                                "schema":  { "type": "string" },
                            },
                        },
                    },
                ],
            ]);
        });
    });
    describe("extractBaseDataFromPath", () => {
        it("should return the base data", () => {
            const model = new OpenApi(dto);
            const path = model.Paths["/a"];
            expect(OpenApi.extractBaseDataFromPath(path)).toEqual({
                "$ref": undefined,
                "parameters": undefined,
            });
        });
    });
    describe("groupParameters", () => {
        it("should return the grouped parameters", () => {
            const model = new OpenApi(dto);
            const path = model.Paths["/a"];
            const operations = OpenApi.extractOperationsFromPath(path);
            const operation = operations.find(([operationName]) => operationName === "get") as [string, Operation];
            expect(OpenApi.groupParameters(operation[1].parameters as Parameters)).toEqual({
                "bodyParameters": [],
                "formDataParameters": [],
                "headerParameters": [],
                "pathParameters": [],
                "queryParameters": [{
                    "description": "a",
                    "in": "query",
                    "name": "a",
                    "required": true,
                    "type": "string",
                }],
                "refParameters":  [],
            });
        });
    });

    describe("humanizeParameterGroupName", () => {
        it("should return the humanized parameter group name", () => {
            expect(OpenApi.humanizeParameterGroupName("bodyParameters")).toEqual("Body Parameters");
            expect(OpenApi.humanizeParameterGroupName("formDataParameters")).toEqual("Form Parameters");
            expect(OpenApi.humanizeParameterGroupName("headerParameters")).toEqual("Header Parameters");
            expect(OpenApi.humanizeParameterGroupName("pathParameters")).toEqual("Path Parameters");
            expect(OpenApi.humanizeParameterGroupName("queryParameters")).toEqual("Query Parameters");
            expect(OpenApi.humanizeParameterGroupName("refParameters")).toEqual("Reference Parameters");
        });
    });
});

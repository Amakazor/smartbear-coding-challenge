import { describe, expect, it } from "vitest";

import { swagger } from "./swagger";

describe("Swagger schema", () => {
    it("should parse well formed data", () => {
        const swaggerFixture = {
            swagger: "2.0",
            info: {
                version: "1.0.0",
                title: "test",
            },
            paths: {
                "/a": {
                    get: {
                        description: "a",
                        tags: ["a"],
                        parameters: [
                            {
                                name: "a",
                                in: "query",
                                description: "a",
                                required: true,
                                type: "string",
                            },
                        ],
                        responses: {
                            200: {
                                description: "a response",
                                schema: { type: "string" },
                                headers: {
                                    a: {
                                        description: "a",
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                                examples: {},
                            },
                            201: {
                                description: "a response",
                                schema: { type: "string" },
                                headers: {
                                    a: {
                                        description: "a",
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                            },
                        },
                    },
                    post: {
                        description: "a",
                        parameters: [
                            {
                                name: "a",
                                in: "body",
                                description: "a",
                                required: true,
                                schema: { type: "string" },
                            },
                        ],
                        responses: {
                            200: {
                                description: "a response",
                                schema: { type: "string" },
                                headers: {
                                    a: {
                                        description: "a",
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                                examples: {},
                            },
                            201: {
                                description: "a response",
                                schema: { type: "string" },
                                headers: {
                                    a: {
                                        description: "a",
                                        type: "string",
                                        format: "binary",
                                    },
                                },
                            },
                        },
                    },
                },
            },
            basePath: "/",
            schemes: ["http", "https"],
            consumes: ["application/json"],
            produces: ["application/json"],
            definitions: {
                a: {
                    type: "object",
                    properties: { a: { type: "string" } },
                },
            },
            securityDefinitions: {
                test: {
                    type: "apiKey",
                    description: "test",
                    name: "test",
                    in: "header",
                },
            },
            security: { test: ["test:read", "test:write" ] },
            tags: [{
                name: "a",
                description: "a",
            }],
        };
        const result = swagger.safeParse(swaggerFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const swaggerFixture = {
            info: {
                version: "1.0.0",
                title: "test",
            },
            paths: {},
        };
        const result = swagger.safeParse(swaggerFixture);
        expect(result.success).toBe(false);
    });
});

import { describe, expect, it } from "vitest";

import { paths } from "./paths";

describe("Paths schema", () => {
    it("should parse well formed data", () => {
        const fixture = {
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
        };
        const result = paths.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            "/a": {
                get: {
                    description: "a",
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
                        800: {
                            description: "a response",
                            schema: { type: "string" },
                            headers: {
                                a: {
                                    description: "a",
                                    type: "string",
                                    format: "binary",
                                },
                            },
                            examples: { a: 1 },
                        },
                    },
                },
            },
        };
        const result = paths.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

import { describe, expect, it } from "vitest";

import { parameter } from "./parameter";

describe("Parameter schema", () => {
    it("should parse well formed query parameter data", () => {
        const fixture = {
            "name": "status",
            "in": "query",
            "description": "Status values that need to be considered for filter",
            "required": true,
            "type": "array",
            "items": {
                "type": "string",
                "enum": [
                    "available",
                    "pending",
                    "sold",
                ],
                "default": "available",
            },
            "collectionFormat": "multi",
        };
        const result = parameter.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed path parameter data", () => {
        const fixture = {
            name: "a",
            in: "path",
            description: "a",
            required: true,
            type: "string",
        };
        const result = parameter.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed header parameter data", () => {
        const fixture = {
            name: "a",
            in: "header",
            description: "a",
            required: true,
            type: "string",
        };
        const result = parameter.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed body parameter data", () => {
        const fixture = {
            name: "a",
            in: "body",
            description: "a",
            required: true,
            schema: { type: "string" },
        };
        const result = parameter.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed form data parameter data", () => {
        const fixture = {
            name: "a",
            in: "formData",
            description: "a",
            required: true,
            type: "file",
        };
        const result = parameter.safeParse(fixture);

        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed query parameter data", () => {
        const fixture = {
            name: "a",
            in: "query",
            description: "a",
            required: true,
            type: "file",
        };
        const result = parameter.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

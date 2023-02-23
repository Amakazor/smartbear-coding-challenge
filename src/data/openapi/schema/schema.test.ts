
import { schema } from "./schema";

describe("Schema schema", () => {
    it("should parse well formed data", () => {
        const fixture = {
            type: "object",
            properties: {
                a: { type: "string" },
                b: {
                    type: "integer",
                    format: "int32",
                },
                c: {
                    type: "array",
                    items: { type: "string" },
                },
                d: { $ref: "#/definitions/pet" },
            },
            required: ["a", "b"],
            title: "a",
            description: "b",
            example: {
                a: "a",
                b: 1,
                c: ["a"],
            },
        };
        const result = schema.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            type: "array",
            properties: {
                a: { type: "string" },
                b: {
                    type: "integer",
                    format: "int32",
                },
                c: {
                    type: "object",
                    items: { type: 1 },
                },
            },
            required: ["a", "b"],
            title: "a",
            description: "b",
            example: {
                a: "a",
                b: 1,
                c: ["a"],
            },
        };
        const result = schema.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

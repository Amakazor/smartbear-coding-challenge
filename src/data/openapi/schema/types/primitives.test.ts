import { describe, expect, it } from "vitest";

import { boolean, integer, number, primitives, string } from "./primitives";

describe("Primitive data types schema", () => {
    describe("Boolean schema", () => {
        it("should parse well formed data", () => {
            const fixture = {
                type: "boolean",
                enum: [true, false],
                default: true,
            };
            const result = boolean.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const fixture = {
                type: "boolean",
                enum: [true, "maybe"],
                default: "maybe",
            };
            const result = boolean.safeParse(fixture);
            expect(result.success).toBe(false);
        });
    });
    describe("String schema", () => {
        it("should parse well formed string data", () => {
            const fixture = {
                type: "string",
                enum: ["a", "b", "c"],
                default: "b",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed string data with additional fields", () => {
            const fixture = {
                type: "string",
                maxLength: 10,
                minLength: 5,
                pattern: "^[a-z]+$",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse date-time string format", () => {
            const fixture = {
                type: "string",
                format: "date-time",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse byte string format", () => {
            const fixture = {
                type: "string",
                format: "byte",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse binary string format", () => {
            const fixture = {
                type: "string",
                format: "binary",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse password string format", () => {
            const fixture = {
                type: "string",
                format: "password",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse date string format", () => {
            const fixture = {
                type: "string",
                format: "date",
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const fixture = {
                type: "string",
                enum: ["a", "b", ["c", "d"]],
                default: 123,
            };
            const result = string.safeParse(fixture);
            expect(result.success).toBe(false);
        });
    });

    describe("Integer Schema", () => {
        it("should parse when provided with well formed data", () => {
            const fixture = {
                type: "integer",
                enum: [1, 2, 3],
                default: 2,
            };
            const result = integer.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse when provided with well formed data with additional fields", () => {
            const fixture = {
                type: "integer",
                minimum: 1,
                exclusiveMinimum: true,
                maximum: 10,
                exclusiveMaximum: false,
                multipleOf: 2,
            };
            const result = integer.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse when provided with int32 format data", () => {
            const fixture = {
                type: "integer",
                format: "int32",
            };
            const result = integer.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse when provided with int64 format data", () => {
            const fixture = {
                type: "integer",
                format: "int64",
            };
            const result = integer.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const fixture = {
                type: "integer",
                enum: [1, 2, "3"],
                default: "3",
            };
            const result = integer.safeParse(fixture);
            expect(result.success).toBe(false);
        });
    });

    describe("Number Schema", () => {
        it("should parse when provided with well formed data", () => {
            const fixture = {
                type: "number",
                enum: [1.1, 2.2, 3.3],
                default: 2.2,
            };
            const result = number.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse when provided with well formed data with additional fields", () => {
            const fixture = {
                type: "number",
                minimum: 1,
                exclusiveMinimum: true,
                maximum: 10,
                exclusiveMaximum: false,
                multipleOf: 2,
            };
            const result = number.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse when provided with float format data", () => {
            const fixture = {
                type: "number",
                format: "float",
            };
            const result = number.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse when provided with double format data", () => {
            const fixture = {
                type: "number",
                format: "double",
            };
            const result = number.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const fixture = {
                type: "number",
                enum: [1, 2, "3"],
                default: "3",
            };
            const result = number.safeParse(fixture);
            expect(result.success).toBe(false);
        });
    });

    it("should parse when provided with well string data", () => {
        const fixture = {
            type: "string",
            enum: ["a", "b", "c"],
            default: "b",
        };
        const result = primitives.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse when provided with well formed integer data", () => {
        const fixture = {
            type: "integer",
            enum: [1, 2, 3],
            default: 2,
        };
        const result = primitives.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse when provided with well formed number data", () => {
        const fixture = {
            type: "number",
            enum: [1.1, 2.2, 3.3],
            default: 2.2,
        };
        const result = primitives.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should parse when provided with well formed boolean data", () => {
        const fixture = {
            type: "boolean",
            enum: [true, false],
            default: false,
        };
        const result = primitives.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            type: "null",
            enum: [1, true, "3"],
            default: "3",
        };
        const result = primitives.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

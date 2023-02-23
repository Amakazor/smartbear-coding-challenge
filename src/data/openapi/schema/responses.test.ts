
import { responses } from "./responses";

describe("Responses schema", () => {
    it("should parse well formed data", () => {
        const fixture = {
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
        };
        const result = responses.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            200: {
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
        };
        const result = responses.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});


import { headers } from "./headers";

describe("Headers schema", () => {
    it("should parse well formed data", () => {
        const fixture = {
            a: {
                description: "a",
                type: "string",
                format: "binary",
            },
            b: {
                description: "b",
                type: "array",
                items: { type: "string" },
            },
        };
        const result = headers.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            a: {
                type: "string",
                format: "binary",
            },
        };
        const result = headers.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

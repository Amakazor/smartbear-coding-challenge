import { describe, expect, it } from "vitest";

import { statusCode } from "./status-code";

describe("Status Code schema", () => {
    it("should parse well formed data", () => {
        const fixture = "200";
        const result = statusCode.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = "800";
        const result = statusCode.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

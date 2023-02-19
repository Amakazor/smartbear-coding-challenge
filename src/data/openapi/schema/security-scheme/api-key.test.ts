import { describe, expect, it } from "vitest";

import { apiKey } from "./api-key";

describe("API Key schema", () => {
    it("should parse well formed data", () => {
        const apiKeyFixture = {
            type: "apiKey",
            description: "test",
            name: "test",
            in: "query",
        };
        const result = apiKey.safeParse(apiKeyFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const apiKeyFixture = {
            type: "apiKey",
            description: "test",
            name: "test",
            in: "test",
        };
        const result = apiKey.safeParse(apiKeyFixture);
        expect(result.success).toBe(false);
    });
});

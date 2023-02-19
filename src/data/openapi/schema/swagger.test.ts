import { describe, expect, it } from "vitest";

import { swagger } from "./swagger";
import { swaggerFixture } from "./swagger.fixture";

describe("Swagger schema", () => {
    it("should parse well formed data", () => {
        const result = swagger.safeParse(swaggerFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            info: {
                version: "1.0.0",
                title: "test",
            },
            paths: {},
        };
        const result = swagger.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

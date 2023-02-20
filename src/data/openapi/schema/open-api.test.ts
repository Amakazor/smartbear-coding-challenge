import { describe, expect, it } from "vitest";

import { openApi } from "./open-api";
import { openApiFixture } from "./open-api-fixture";

describe("OpenApi schema", () => {
    it("should parse well formed data", () => {
        const result = openApi.safeParse(openApiFixture);
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
        const result = openApi.safeParse(fixture);
        expect(result.success).toBe(false);
    });
});

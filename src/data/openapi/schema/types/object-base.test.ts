import { describe, expect, it } from "vitest";

import { objectBase } from "./object-base";

describe("Object Base schema", () => {
    it("should parse well formed data", () => {
        const objectBaseFixture = {
            type: "object",
            maxProperties: 1,
            minProperties: 1,
            required: ["a"],
        };
        const result = objectBase.safeParse(objectBaseFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const objectBaseFixture = {
            type: "object",
            maxProperties: "1",
            minProperties: 1,
            required: [true],
        };
        const result = objectBase.safeParse(objectBaseFixture);
        expect(result.success).toBe(false);
    });
});

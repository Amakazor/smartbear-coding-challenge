import { describe, expect, it } from "vitest";

import { info } from "./info";

describe("Info schema", () => {
    it("should parse well formed data", () => {
        const infoFixture = {
            title: "a",
            description: "b",
            termsOfService: "c",
            contact: {
                name: "d",
                url: "http://a.a",
                email: "a@a.com",
            },
            license: {
                name: "g",
                url: "http://a.a",
            },
            version: "1",
        };
        const result = info.safeParse(infoFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const infoFixture = {
            title: 1,
            description: "b",
            termsOfService: "c",
            contact: {
                name: "d",
                url: "e",
                email: "f",
            },
            license: {
                name: "g",
                url: "h",
            },
            version: "i",
        };
        const result = info.safeParse(infoFixture);
        expect(result.success).toBe(false);
    });
});

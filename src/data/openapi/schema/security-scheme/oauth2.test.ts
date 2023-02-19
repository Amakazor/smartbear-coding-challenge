import { describe, expect, it } from "vitest";

import { oAuth } from "./oauth2";

describe("OAuth2 schema", () => {
    it("should parse well formed data with implicit flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "implicit",
            authorizationUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = oAuth.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed data with accessCode flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "accessCode",
            authorizationUrl: "https://example.com",
            tokenUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = oAuth.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed data with password flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "password",
            tokenUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = oAuth.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed data with application flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "application",
            tokenUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = oAuth.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "implicit",
            tokenUrl: "https://example.com",
            scopes: { test: 1 },
        };
        const result = oAuth.safeParse(oAuthFixture);
        expect(result.success).toBe(false);
    });
});

import { describe, expect, it } from "vitest";

import { securityScheme } from "./security-scheme";

describe("Security Scheme schema", () => {
    it("should parse well formed api key data", () => {
        const securitySchemeFixture = {
            type: "apiKey",
            description: "test",
            name: "test",
            in: "query",
        };
        const result = securityScheme.safeParse(securitySchemeFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed basic data", () => {
        const basicFixture = {
            type: "basic",
            description: "test",
        };
        const result = securityScheme.safeParse(basicFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed oauth data with implicit flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "implicit",
            authorizationUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = securityScheme.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed oauth data with accessCode flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "accessCode",
            authorizationUrl: "https://example.com",
            tokenUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = securityScheme.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed oauth data with password flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "password",
            tokenUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = securityScheme.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should parse well formed oauth data with application flow", () => {
        const oAuthFixture = {
            type: "oauth2",
            description: "test",
            flow: "application",
            tokenUrl: "https://example.com",
            scopes: { test: "test" },
        };
        const result = securityScheme.safeParse(oAuthFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const securitySchemeFixture = {
            type: "apiKey",
            description: "test",
            name: "test",
            in: "test",
        };
        const result = securityScheme.safeParse(securitySchemeFixture);
        expect(result.success).toBe(false);
    });
});

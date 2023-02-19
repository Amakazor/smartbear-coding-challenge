import { describe, expect, it } from "vitest";

import { environment } from "./environment";

describe("Environment", () => {
    it("should have an api url", () => {
        expect(environment.apiUrl).toBeDefined();
    });
    it("should store proper value in api url", () => {
        expect(environment.apiUrl).toBe(import.meta.env.VITE_API_BASE_URL);
    });
    it("should have an api schema path", () => {
        expect(environment.apiSchemaPath).toBeDefined();
    });
    it("should store proper value in api schema path", () => {
        expect(environment.apiSchemaPath).toBe(import.meta.env.VITE_API_SCHEMA_PATH);
    });
});

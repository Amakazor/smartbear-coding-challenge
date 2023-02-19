import { fetchApiSpec } from "@data/openapi/fetchers/fetcher";
import { describe, expect, it } from "vitest";

describe("OpenAPI fetcher", () => {
    it("should fetch and parse the API spec", async () => {
        const result = await fetchApiSpec();
        const data = result.success ? result.data : undefined;

        expect(result.success).toBe(true);
        expect(data).toBeDefined();
        expect(data?.info).toBeDefined();
        expect(data?.swagger).toBeDefined();
        expect(data?.paths).toBeDefined();
    });
});

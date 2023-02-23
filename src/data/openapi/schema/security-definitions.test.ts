
import { securityDefinitions } from "./security-definitions";

describe("Security Definitions schema", () => {
    it("should parse well formed data", () => {
        const securityDefinitionsFixture = {
            test: {
                type: "apiKey",
                description: "test",
                name: "test",
                in: "query",
            },
        };
        const result = securityDefinitions.safeParse(securityDefinitionsFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const securityDefinitionsFixture = {
            test: {
                type: "apiKey",
                description: "test",
                name: "test",
                in: "test",
            },
        };
        const result = securityDefinitions.safeParse(securityDefinitionsFixture);
        expect(result.success).toBe(false);
    });
});

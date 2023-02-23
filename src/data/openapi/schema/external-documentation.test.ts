
import { externalDocumentation } from "./external-documentation";

describe("External Documentation schema", () => {
    it("should parse well formed data", () => {
        const externalDocumentationFixture = {
            description: "Find out more",
            url: "https://example.com",
        };
        const result = externalDocumentation.safeParse(externalDocumentationFixture);
        expect(result.success).toBe(true);
    });
    it("should error when provided with malformed data", () => {
        const externalDocumentationFixture = {
            description: "Find out more",
            url: 123,
        };
        const result = externalDocumentation.safeParse(externalDocumentationFixture);
        expect(result.success).toBe(false);
    });
});

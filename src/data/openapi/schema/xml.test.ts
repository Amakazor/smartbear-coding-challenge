
import { xml } from "./xml";

describe("XML schema", () => {
    it("should parse well formed data", () => {
        const xmlFixture = {
            name: "a",
            namespace: "b",
            prefix: "c",
            attribute: true,
            wrapped: true,
        };
        const result = xml.safeParse(xmlFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const xmlFixture = {
            name: 1,
            namespace: "b",
            prefix: "c",
            attribute: true,
            wrapped: true,
        };
        const result = xml.safeParse(xmlFixture);
        expect(result.success).toBe(false);
    });
});

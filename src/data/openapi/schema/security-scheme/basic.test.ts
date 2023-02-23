
import { basic } from "./basic";

describe("Basic schema", () => {
    it("should parse well formed data", () => {
        const basicFixture = {
            type: "basic",
            description: "test",
        };
        const result = basic.safeParse(basicFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const basicFixture = {
            type: "basic",
            description: 1,
        };
        const result = basic.safeParse(basicFixture);
        expect(result.success).toBe(false);
    });
});

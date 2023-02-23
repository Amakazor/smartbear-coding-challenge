
import { arrayBase } from "./array-base";

describe("Array Base schema", () => {
    it("should parse well formed data", () => {
        const arrayBaseFixture = {
            type: "array",
            maxItems: 1,
            minItems: 1,
            uniqueItems: true,
            collectionFormat: "csv",
        };
        const result = arrayBase.safeParse(arrayBaseFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const arrayBaseFixture = {
            type: "array",
            maxItems: "1",
            minItems: 1,
            uniqueItems: true,
            collectionFormat: "dds",
        };
        const result = arrayBase.safeParse(arrayBaseFixture);
        expect(result.success).toBe(false);
    });
});

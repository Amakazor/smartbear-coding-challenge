
import { items, itemsWithFile } from "./items";

describe("Items schema", () => {
    it("should parse well formed data", () => {
        const fixture = {
            type: "array",
            items: { type: "string" },
        };
        const result = items.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = {
            type: "array",
            items: { type: 1 },
        };
        const result = items.safeParse(fixture);
        expect(result.success).toBe(false);
    });

    describe("Items schema with file", () => {
        it("should parse well formed data", () => {
            const fixture = { type: "file" };
            const result = itemsWithFile.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const fixture = { type: "file2" };
            const result = itemsWithFile.safeParse(fixture);
            expect(result.success).toBe(false);
        });
    });
});

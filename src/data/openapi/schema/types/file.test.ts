
import { file, primitivesWithFile } from "./file";

describe("File schema", () => {
    it("should parse well formed data", () => {
        const fixture = { type: "file" };
        const result = file.safeParse(fixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const fixture = { type: "files" };
        const result = file.safeParse(fixture);
        expect(result.success).toBe(false);
    });

    describe("Primitives with file schema", () => {
        it("should parse well formed file data", () => {
            const fixture = {
                type: "string",
                format: "binary",
            };
            const result = primitivesWithFile.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed primitive data", () => {
            const fixture = {
                type: "integer",
                format: "int32",
            };
            const result = primitivesWithFile.safeParse(fixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const fixture = {
                type: "integer",
                format: "file",
                enum: ["a", "b", ["c", "d"]],
                default: 123,
            };
            const result = primitivesWithFile.safeParse(fixture);
            expect(result.success).toBe(false);
        });
    });
});

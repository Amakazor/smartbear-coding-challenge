
import { collectionFormat, collectionFormatMulti } from "./collection-format";

describe("Collection Format schema", () => {
    describe("Without multi", () => {
        it("should parse well formed csv data", () => {
            const collectionFormatFixture = "csv";
            const result = collectionFormat.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed ssv data", () => {
            const collectionFormatFixture = "ssv";
            const result = collectionFormat.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed tsv data", () => {
            const collectionFormatFixture = "tsv";
            const result = collectionFormat.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed pipes data", () => {
            const collectionFormatFixture = "pipes";
            const result = collectionFormat.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with multi data", () => {
            const collectionFormatFixture = "multi";
            const result = collectionFormat.safeParse(collectionFormatFixture);
            expect(result.success).toBe(false);
        });

        it("should error when provided with malformed data", () => {
            const collectionFormatFixture = "dds";
            const result = collectionFormat.safeParse(collectionFormatFixture);
            expect(result.success).toBe(false);
        });
    });

    describe("With multi", () => {
        it("should parse well formed csv data", () => {
            const collectionFormatFixture = "csv";
            const result = collectionFormatMulti.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed ssv data", () => {
            const collectionFormatFixture = "ssv";
            const result = collectionFormatMulti.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed tsv data", () => {
            const collectionFormatFixture = "tsv";
            const result = collectionFormatMulti.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed pipes data", () => {
            const collectionFormatFixture = "pipes";
            const result = collectionFormatMulti.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should parse well formed multi data", () => {
            const collectionFormatFixture = "multi";
            const result = collectionFormatMulti.safeParse(collectionFormatFixture);
            expect(result.success).toBe(true);
        });

        it("should error when provided with malformed data", () => {
            const collectionFormatFixture = "dds";
            const result = collectionFormatMulti.safeParse(collectionFormatFixture);
            expect(result.success).toBe(false);
        });
    });
});

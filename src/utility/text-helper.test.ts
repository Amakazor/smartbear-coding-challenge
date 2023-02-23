// Magic numbers are cool in tests
/* eslint-disable no-magic-numbers */
import { TextHelper } from "@utility/text-helper";

describe("TextHelper class", () => {
    describe("Hash method", () => {
        it("should produce valid hash", function () {
            expect(TextHelper.hash("test")).toBe(0x1E_F5_20_9D_B8_E1_C9);
        });
        it("should produce unique hashes", () => {
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test2"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test3"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test4"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test5"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test6"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test7"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test8"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test9"));
            expect(TextHelper.hash("test")).not.toBe(TextHelper.hash("test10"));
        });
    });
    describe("Clean method", () => {
        it("should clean string", () => {
            expect(TextHelper.clean("test")).toBe("test");
            expect(TextHelper.clean("test/test")).toBe("test_test");
            expect(TextHelper.clean("test-test test")).toBe("test_test_test");
            expect(TextHelper.clean("test,test;test:test")).toBe("test_test_test_test");
            expect(TextHelper.clean("test+test.test/test\\test")).toBe("test_test_test_test_test");
        });
    });
    describe("CapitalizeFirstLetter method", () => {
        it("should capitalize first letter", () => {
            expect(TextHelper.capitalizeFirstLetter("test")).toBe("Test");
            expect(TextHelper.capitalizeFirstLetter("test test")).toBe("Test test");
            expect(TextHelper.capitalizeFirstLetter("test test test")).toBe("Test test test");
        });
    });
});

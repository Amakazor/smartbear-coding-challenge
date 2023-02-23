import { describe, expect, it } from "vitest";

import { tags } from "./tags";

describe("Tags schema", () => {
    it("should parse when provided with well formed data", () => {
        const tagsFixture = [
            {
                name: "pet",
                description: "Everything about your Pets",
                externalDocs: {
                    description: "Find out more",
                    url: "https://example.com",
                },
            },
            {
                name: "store",
                description: "Access to Petstore orders",
            },
            {
                name: "user",
                description: "Operations about user",
                externalDocs: {
                    description: "Find out more about our store",
                    url: "https://example.com",
                },
            },
        ];
        const result = tags.safeParse(tagsFixture);
        expect(result.success).toBe(true);
    });

    it("should error when provided with malformed data", () => {
        const tagsFixture = [
            {
                title: "pet",
                description: "Everything about your Pets",
                externalDocs: {
                    description: "Find out more",
                    url: "https://example.com",
                },
            },
            {
                name: "user",
                example: "Operations about user",
                externalDocs: {
                    description: "Find out more about our store",
                    url: "https://example.com",
                },
            },
        ];
        const result = tags.safeParse(tagsFixture);
        expect(result.success).toBe(false);
    });
});

import { openApiFixture } from "@data/openapi/schema/open-api-fixture";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { environment } from "@utility/environment";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

expect.extend(matchers);

export const restHandlers = [
    rest.get(`${environment.apiUrl}${environment.apiSchemaPath}`, (request, response, context) => {
        // Status code is not really a magic number
        // eslint-disable-next-line no-magic-numbers
        return response(context.status(200), context.json(openApiFixture));
    }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => {
    server.resetHandlers();
    cleanup();
});

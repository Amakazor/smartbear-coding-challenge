import { openApiFixture } from "@data/openapi/schema/open-api-fixture";
import { environment } from "@utility/environment";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

export const restHandlers = [
    rest.get(`${environment.apiUrl}${environment.apiSchemaPath}`, (request, response, context) => {
        return response(context.status(200), context.json(openApiFixture));
    }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

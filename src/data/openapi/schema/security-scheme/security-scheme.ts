import { z } from "zod";

import { apiKey } from "./api-key";
import { basic } from "./basic";
import { oAuth } from "./oauth2";

export const securityScheme = z.union([
    basic,
    apiKey,
    oAuth,
]);

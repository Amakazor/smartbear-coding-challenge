import { z } from "zod";

import { securityScheme } from "./security-scheme/security-scheme";

export const securityDefinitions = z.record(z.string(), securityScheme);

import { z } from "zod";

import { externalDocumentation } from "./external-documentation";

export const tags = z.array(z.object({
    name: z.string(),
    description: z.string(),
    externalDocs: externalDocumentation.optional(),
}));

import { z } from "zod";

export const externalDocumentation = z.object({
    description: z.string(),
    url: z.string(),
});

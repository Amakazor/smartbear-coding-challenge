import { z } from "zod";

import { arrayBase } from "./types/array-base";
import { file, primitivesWithFile } from "./types/file";
import { primitives } from "./types/primitives";

type typeofItems = z.infer<typeof primitives>
    | (z.infer<typeof arrayBase> & { items: typeofItems });

type typeofItemsWithFile = z.infer<typeof primitivesWithFile>
    | (z.infer<typeof arrayBase> & { items: typeofItems });

export const items: z.ZodType<typeofItems> = primitives
    .or(arrayBase.extend({ items: z.lazy(() => items) }));

export const itemsWithFile: z.ZodType<typeofItemsWithFile> = z.union([primitives, file])
    .or(arrayBase.extend({ items: z.lazy(() => items) }));

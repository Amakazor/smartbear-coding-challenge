import { z } from "zod";

import { arrayBase, arrayBaseMulti } from "./types/array-base";
import { file, primitivesWithFile } from "./types/file";
import { primitives } from "./types/primitives";

export type typeofItems = z.infer<typeof primitives>
    | (z.infer<typeof arrayBase> & { items: typeofItems });

type typeofItemsWithFile = z.infer<typeof primitivesWithFile>
    | (z.infer<typeof arrayBase> & { items: typeofItems });

export type typeofItemsMulti = z.infer<typeof primitives>
    | (z.infer<typeof arrayBaseMulti> & { items: typeofItemsMulti });

type typeofItemsWithFileMulti  = z.infer<typeof primitivesWithFile>
    | (z.infer<typeof arrayBaseMulti> & { items: typeofItemsWithFileMulti });

export const items: z.ZodType<typeofItems> = z.union([
    primitives,
    arrayBase.extend({ items: z.lazy(() => items) }),
]);

export const itemsMulti: z.ZodType<typeofItemsMulti> = z.union([
    primitives,
    arrayBaseMulti.extend({ items: z.lazy(() => itemsMulti) }),
]);

export const itemsWithFile: z.ZodType<typeofItemsWithFile> = z.union([
    primitives,
    arrayBase.extend({ items: z.lazy(() => items) }),
    file,
]);

export const itemsWithFileMulti: z.ZodType<typeofItemsWithFileMulti> = z.union([
    primitives,
    arrayBaseMulti.extend({ items: z.lazy(() => items) }),
    file,
]);

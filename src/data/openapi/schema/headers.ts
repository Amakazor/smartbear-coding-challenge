import { z } from "zod";

import { items, typeofItems } from "./items";
import { arrayBase } from "./types/array-base";
import { primitives } from "./types/primitives";

const headerBase = z.object({ description: z.string() });

type typeofHeader = z.infer<typeof headerBase>
    | (z.infer<typeof arrayBase> & { items: typeofItems });

export const header: z.ZodType<typeofHeader> = headerBase
    .and(z.union([
        primitives,
        arrayBase.extend({ items: z.lazy(() => items) }),
    ]));

export const headers = z.record(z.string(), header);

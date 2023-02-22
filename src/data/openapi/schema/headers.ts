import { z } from "zod";

import { items, typeofItems } from "./items";
import { arrayBase } from "./types/array-base";
import { boolean, integer, number, string } from "./types/primitives";


const headerDescription = z.object({ description: z.string() });

const headerBase = z.union([
    headerDescription.merge(boolean),
    headerDescription.merge(string),
    headerDescription.merge(integer),
    headerDescription.merge(number),
    headerDescription.merge(arrayBase.extend({ items: z.lazy(() => items) })),
]);

type typeofHeader = z.infer<typeof headerBase>
    | (z.infer<typeof arrayBase> & { items: typeofItems });

export const header: z.ZodType<typeofHeader> = z.union([
    headerBase,
    headerDescription.merge(arrayBase.extend({ items: z.lazy(() => items) })),
]);

export type Header = z.infer<typeof header>;

export const headers = z.record(z.string(), header);

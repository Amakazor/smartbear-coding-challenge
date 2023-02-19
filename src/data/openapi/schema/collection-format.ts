import { z } from "zod";

export const collectionFormat = z.union([
    z.literal("csv"),
    z.literal("ssv"),
    z.literal("tsv"),
    z.literal("pipes"),
]);

export const collectionFormatMulti = z.union([collectionFormat, z.literal("multi")]);

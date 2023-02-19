import { primitives } from "@data/openapi/schema/types/primitives";
import { z } from "zod";

export const file = z.object({ type: z.literal("file") });

export const primitivesWithFile = z.union([primitives, file]);

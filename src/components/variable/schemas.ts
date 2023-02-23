import { Schema } from "@data/openapi/schema/schema";
import { ArrayBase, ObjectBase, Primitives } from "@data/openapi/schema/types";

export type RefSchema = {
    "$ref": string;
}

export type ObjectSchema = ObjectBase & {
    properties: Record<string, VariableSchema>;
    additionalProperties?: VariableSchema;
}

export type ArraySchema = (ArrayBase & {
    items: VariableSchema;
})

export type PrimitiveSchema = Primitives

export type RequiredSchema = { required?: boolean | string[]; }

export type VariableSchema = RefSchema | ArraySchema | ObjectSchema | PrimitiveSchema | RequiredSchema | Schema;

import { ArraySchema, ObjectSchema, PrimitiveSchema, RefSchema, VariableSchema } from "./schemas";

export const isRef = (variable: VariableSchema): variable is RefSchema => "$ref" in variable;
export const isArray = (variable: VariableSchema): variable is ArraySchema => "items" in variable;
export const isObject = (variable: VariableSchema): variable is ObjectSchema => "properties" in variable || "additionalProperties" in variable;
export const isPrimitive = (variable: VariableSchema): variable is PrimitiveSchema => "type" in variable;
export const isFormattedPrimitive = (variable: PrimitiveSchema): variable is { format: string } & PrimitiveSchema => "format" in variable;
export const isRequiredPrimitive = (variable: VariableSchema): variable is { required: boolean } & PrimitiveSchema => "required" in variable;

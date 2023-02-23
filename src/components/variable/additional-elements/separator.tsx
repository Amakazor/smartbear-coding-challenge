import { Span } from "@components";

import { isRequiredPrimitive } from "../guards";
import { VariableSchema } from "../schemas";

type SeparatorProps = {
    variable: VariableSchema;
    name: string;
    parent?: VariableSchema;
}

const isOptional = (variable: VariableSchema, name: string, parent?: VariableSchema) => {
    const requiredPrimitive = isRequiredPrimitive(variable) && variable.required;

    const parentHasRequirements = parent && ("required" in parent);
    const requiredByParent = parentHasRequirements && typeof parent.required === "object" && parent.required.includes(name);

    return !(requiredPrimitive || requiredByParent);
};

export const Separator = ({ variable, name, parent }: SeparatorProps) => {
    return <Span variant={"body-small"} className={"text-red-300"}>{isOptional(variable, name, parent) && "?"}: </Span>;
};

Separator.defaultProps = { parent: undefined };

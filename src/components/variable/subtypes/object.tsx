import { toPairs } from "lodash";

import { ObjectSchema, VariableSchema } from "../schemas";
import { parseVariable } from "../variable";

type ObjectProps = {
    variable: ObjectSchema
}

export const Object = ({ variable }: ObjectProps) => {
    const additionalData = {
        name: "{string}",
        variable: variable.additionalProperties as VariableSchema,
        parent: variable,
    };

    return (
        <>
            {toPairs(variable.properties).map(([key, value]) => {
                const data = {
                    name: key,
                    variable: value,
                    parent: variable,
                };
                return (
                    <div key={key} className={"ml-4"}>
                        {parseVariable(data)}
                    </div>
                );
            })}
            {variable.additionalProperties && (
                <div className={"ml-4"}>
                    {parseVariable(additionalData)}
                </div>
            )}
        </>
    );
};

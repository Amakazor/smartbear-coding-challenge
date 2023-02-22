import { CodeBox } from "@components/code-box";
import { Parameter, ParameterOrRef, Parameters as ParametersSchema } from "@data/openapi/schema/parameter";

import { Variable } from "../variables/variable";

export type ParameterGroupProps = {
    parameters: ParametersSchema;
}

const hasName = (parameter: ParameterOrRef | {name: string}): parameter is { name: string } => "name" in parameter;
const isNonRefParameter = (parameter: ParameterOrRef): parameter is Parameter => !("$ref" in parameter);

export const ParameterGroup = ({ parameters }: ParameterGroupProps) => {

    return (
        <CodeBox>
            {parameters.map((parameter) => {
                const name = hasName(parameter) ? parameter.name : "Reference:";
                const data = isNonRefParameter(parameter) && parameter.in === "body" ? parameter.schema : parameter;

                return <Variable key={name} name={name === "body" ? null : name} variable={data}/>;
            })}
        </CodeBox>
    );
};

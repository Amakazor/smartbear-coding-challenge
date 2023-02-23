import { Accordion, AccordionElement, Span } from "@components";
import { OpenApi, ParameterGroupName } from "@data/openapi/models/open-api";
import { Parameters as ParametersSchema } from "@data/openapi/schema/parameter";
import { toPairs } from "lodash";

import { ParameterGroup } from "./parameter-group";

export type ParametersProps = {
    parameters: ParametersSchema;
}

const parameterGroupsToAccordionElements = (groupedParameters: ReturnType<typeof OpenApi.groupParameters>) => toPairs(groupedParameters)
    .filter(([, parameters]) => parameters.length > 0)
    .map(parameterGroupToAccordionElement);

const parameterGroupToAccordionElement = ([name, parameters]: [string, ParametersSchema]) => ({
    header: <Span className={"ml-2"}>{OpenApi.humanizeParameterGroupName(name as ParameterGroupName)}</Span>,
    body: <ParameterGroup parameters={parameters}/>,
    key: name,
});

export const Parameters = ({ parameters }: ParametersProps) => {
    const groupedParameters = OpenApi.groupParameters(parameters);
    const accordionElements:AccordionElement[] = parameterGroupsToAccordionElements(groupedParameters);

    return (
        <div className={"gap-4 justify-stretch self-stretch"}>
            <Span>Takes parameters:</Span>
            <Accordion collapsibles={accordionElements}/>
        </div>
    );
};

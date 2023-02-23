import { Accordion, AccordionElement, Span } from "@components";
import { Response as ResponseSchema, Responses as ResponsesSchema } from "@data/openapi/schema/responses";
import { StatusCode, statusCode } from "@data/openapi/schema/status-code";
import { TextHelper } from "@utility/text-helper";
import { toPairs } from "lodash";

import { Response } from "./response";

export type ResponsesProps = {
    responses: ResponsesSchema;
}

type StringNamedResponse = [string, ResponseSchema];
type CodeNamedResponse = [StatusCode, ResponseSchema];

const entryIsResponse = (data: StringNamedResponse): data is CodeNamedResponse => statusCode.safeParse(data[0]).success;

const responseHasBody = (response: ResponseSchema) => response.schema || response.headers || response.examples;
const entryToAccordionCollapsible = ([statusCode, response]: [StatusCode, ResponseSchema]):AccordionElement => ({
    header: <Span className={"ml-2"}>
        {statusCode === "default" ? `Default - ${response.description}` : `Status Code ${statusCode} - ${TextHelper.CapitalizeFirstLetter(response.description)}`}
    </Span>,
    body: responseHasBody(response) ? <Response response={response}/> : null,
    key: statusCode,
});

export const Responses = ({ responses }: ResponsesProps) => {
    const collapsibles = toPairs(responses).filter(entryIsResponse).map(entryToAccordionCollapsible);

    return (
        <div className={"gap-4 justify-stretch self-stretch"}>
            <Span>Responds with:</Span>
            <Accordion collapsibles={collapsibles}/>
        </div>
    );
};

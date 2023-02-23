import { CodeBox, Span, Variable, VariableSchema } from "@components";
import { Response as ResponseSchema } from "@data/openapi/schema/responses";
import { toPairs } from "lodash";

type ResponseProps = {
    response: ResponseSchema;
}

const TupleToVariableElement = ([name, variable]: [string | null, VariableSchema]) => <Variable key={name} name={name} variable={variable}/>;
const StringifyExample = ([name, example]: [string, unknown]) => [name, { type: JSON.stringify(example) }] as [string, {type: string}];

export const Response = ({ response: { examples, headers, schema } }: ResponseProps) => {
    const schemaColSpan = (headers || examples) ? "md:col-span-3" : "md:col-span-5";
    const othersColSpan = (schema) ? "md:col-span-2" : "md:col-span-3";
    const othersRowSpan = (headers && examples) ? "row-span-1" : "row-span-2";

    return (
        <div className={"gap-4 grid grid-cols-2 md:grid-cols-5 grid-rows-4 md:grid-rows-2"}>
            { schema && (
                <div className={`col-span-2 ${schemaColSpan} row-span-2 flex flex-col`}>
                    <Span>Schema:</Span>
                    <CodeBox className={"grow"}>{
                        TupleToVariableElement([null, schema])
                    }</CodeBox>
                </div>
            )}

            { headers && (
                <div className={`col-span-2 ${othersColSpan} ${othersRowSpan} flex flex-col`}>
                    <Span>Headers:</Span>
                    <CodeBox className={"grow"}>{
                        toPairs(headers)
                            .map(TupleToVariableElement)
                    }</CodeBox>
                </div>
            )}

            { examples && (
                <div className={`col-span-2 ${othersColSpan} ${othersRowSpan} flex flex-col`}>
                    <Span>Examples:</Span>
                    <CodeBox className={"grow"}>{
                        toPairs(examples)
                            .map(StringifyExample)
                            .map(TupleToVariableElement)
                    }</CodeBox>
                </div>
            )}
        </div>
    );
};

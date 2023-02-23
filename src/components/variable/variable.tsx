import { Span } from "@components";
import { Schema } from "@data/openapi/schema/schema";
import { ArrayBase, ObjectBase, Primitives } from "@data/openapi/schema/types";
import { toPairs } from "lodash";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

export type VariableSchema = {
    "$ref": string;
} | (ArrayBase & {
    items: VariableSchema;
}) | (ObjectBase & {
    properties: Record<string, VariableSchema>;
    additionalProperties?: VariableSchema;
}) | {
    type: string
    format?: string;
} | Schema;

export type VariableProps = {
    name: string | null;
    variable: VariableSchema;
    level?: number;
}

const isRef = (variable: VariableSchema): variable is { $ref: string } => "$ref" in variable;
const isArray = (variable: VariableSchema): variable is { items: VariableSchema } & ArrayBase => "items" in variable;
const isObject = (variable: VariableSchema): variable is { properties: Record<string, VariableSchema> } & ObjectBase => "properties" in variable || "additionalProperties" in variable;
const isAtLeastPrimitive = (variable: Primitives | object): variable is Primitives => "type" in variable;
const hasFormat = (variable: Primitives): variable is { format: string } & Primitives => "format" in variable;

const parseVariable = (name: string | null, variable: VariableSchema, addSemicolon = true):JSX.Element => {
    const nameElement = name && <><Span variant={"body-small"} className={"text-green-300"}>{name}</Span><Span variant={"body-small"}>:</Span></>;

    if (isRef(variable)) {
        const refParts = variable.$ref.split("/");
        const refName = refParts[refParts.length - 1];

        return (
            <>
                {nameElement}{nameElement && " "}
                <Link to={`/definitions/${refName}`}>
                    <Span variant={"body-small"} className={"inline-flex flex-row gap-2 items-center border-b-2 group hover:border-b-blue-400 transition"}>
                        <Span variant={"body-small"} className={"text-blue-300"}>{variable.$ref}</Span>
                        <Icon.Link size={16} className={"group-hover:text-blue-400 transition"}/>
                    </Span>
                </Link>
            </>
        );
    }

    if (isArray(variable)) {
        return (
            <>
                {nameElement}{" "}[{parseVariable(null, variable.items, false)}]
            </>
        );
    }

    if (isObject(variable)) {
        return (
            <>
                { nameElement && <div>{nameElement}</div>}{" {"}
                {toPairs(variable.properties).map(([name, variable]) => (
                    <div key={name} className={"ml-4"}>
                        {parseVariable(name, variable)}
                    </div>
                ))}
                {variable.additionalProperties && (
                    <div className={"ml-4"}>
                        {parseVariable("{string}", variable.additionalProperties as VariableSchema)}
                    </div>
                )}
                <div>{"}"}</div>
            </>
        );
    }

    if (isAtLeastPrimitive(variable)) {
        const typeElement = <Span variant={"body-small"} className={"text-blue-300"}>{variable.type}</Span>;
        const formatElement = hasFormat(variable) ? <> (<Span variant={"body-small"} className={"text-purple-300"}>{variable.format}</Span>)</> : null;
        return (
            <>
                {nameElement}{nameElement && " "}{typeElement}{formatElement}{addSemicolon && ";"}
            </>
        );

    }

    return <></>;
};

export const Variable = ({ name, variable }: VariableProps) => (
    <div>
        {parseVariable(name, variable)}
    </div>
);

Variable.defaultProps = { level: 0 };

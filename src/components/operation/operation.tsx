import { Collapsible } from "@components/collapsible";
import { Span } from "@components/span";
import { Operation as OperationSchema, OperationMethod } from "@data/openapi/schema/paths";
import { TextHelper } from "@utility/text-helper";

import { ContentTypes } from "./content-types/content-types";
import { Header } from "./headers/header";
import { OperationId } from "./ids/operation-id";
import { Parameters } from "./parameters/parameters";
import { Responses } from "./responses/responses";

type OperationProps = {
    name: OperationMethod;
    operation: OperationSchema;
    openByDefault?: boolean;
}

export const Operation = ({
    name, openByDefault, operation: {
        consumes,
        description,
        operationId,
        parameters,
        produces,
        responses,
        summary,
        tags,
    },

}:OperationProps) => {
    return (
        <Collapsible className={"my-2"} openByDefault={openByDefault}
            header={<Header name={name} pathName={summary ? TextHelper.capitalizeFirstLetter(summary) : name} tags={tags}/>}
        >
            <div className={"flex flex-col gap-8 items-start relative min-h-[1rem]"}>
                {operationId && <OperationId operationId={operationId}/>}
                {description && <Span>{description}</Span>}
                {(consumes || !!produces) && <ContentTypes consumes={consumes} produces={produces} />}
                {responses && <Responses responses={responses}/>}
                {parameters && parameters.length > 0 && <Parameters parameters={parameters}/>}
            </div>
        </Collapsible>
    );
};

Operation.defaultProps = { openByDefault: false };

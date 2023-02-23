import { CodeBox, Divider, Span, Variable } from "@components";
import { Schema } from "@data/openapi/schema/schema";

type DefinitionProps = {
    id: string;
    definition: Schema;
    useDivider?: boolean;
}

export const Definition = ({ id, definition, useDivider }: DefinitionProps) =>
    (
        <Span id={id} className={"w-full flex flex-col gap-4 scroll-m-10"}>
            <Span variant={"body-very-large"} className={"text-white max-w-screen-xl self-center"}>{id}:</Span>
            <CodeBox><Variable name={id} variable={definition} rootRequired/></CodeBox>
            {useDivider && <Divider variant={"dotted"}/>}
        </Span>
    );

Definition.defaultProps = { useDivider: true };

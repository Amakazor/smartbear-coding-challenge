import { CodeBox } from "@components/code-box";
import { Divider } from "@components/divider";
import { Variable } from "@components/operation/variables/variable";
import { Span } from "@components/span";
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
            <CodeBox><Variable name={id} variable={definition}/></CodeBox>
            {useDivider && <Divider.Dots/>}
        </Span>
    );

Definition.defaultProps = { useDivider: true };

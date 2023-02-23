import { Span } from "@components";
import { RefSchema } from "@components/variable/schemas";
import { TextHelper } from "@utility/text-helper";
import { Link as LinkIcon } from "react-feather";
import { Link } from "react-router-dom";

type RefProps = {
    variable: RefSchema
}

export const Ref = ({ variable }: RefProps) => {
    const refParts = variable.$ref.split("/");
    const refName = refParts[refParts.length - 1];

    return (
        <Link to={`/definitions/${TextHelper.clean(refName)}`}>
            <Span variant={"body-small"} className={"inline-flex flex-row gap-2 items-center border-b-2 group hover:border-b-blue-400 transition"}>
                <Span variant={"body-small"} className={"text-blue-300"}>{variable.$ref}</Span>
                <LinkIcon size={16} className={"group-hover:text-blue-400 transition"}/>
            </Span>
        </Link>
    );
};

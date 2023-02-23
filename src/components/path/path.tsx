import { Divider, Operation, Span } from "@components";
import { OpenApi } from "@data/openapi/models/open-api";
import { Path as PathSchema } from "@data/openapi/schema/paths";
import { TextHelper } from "@utility/text-helper";
import { ChevronsRight, Link as LinkIcon } from "react-feather";
import { Link } from "react-router-dom";

type PathProps = {
    name: string;
    path: PathSchema;
    operationsOpen?: boolean;
}
export const Path = ({ name, path, operationsOpen }: PathProps) => {
    const operations = OpenApi.ExtractOperationsFromPath(path);

    return (
        <li id={name} className={"flex flex-col items-start text-white w-full"}>
            <Link to={`/paths/${TextHelper.Clean(name)}`} className={"group"}>
                <Span className={"flex flex-row items-center gap-4 py-4 underline group-hover:decoration-blue-300"}>
                    <ChevronsRight size={24}/>
                    {name}
                    <LinkIcon size={16} className={"group-hover:text-blue-400 transition"}/>
                </Span>
            </Link>
            {operations.map(([operationName, operation]) => <Operation openByDefault={operationsOpen} name={operationName} operation={operation} key={operationName}/>)}
            <Divider variant={"dotted"}/>
        </li>
    );
};

Path.defaultProps = { operationsOpen: false };

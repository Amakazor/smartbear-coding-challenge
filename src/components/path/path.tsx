import { Divider } from "@components/divider";
import { Operation } from "@components/operation";
import { Span } from "@components/span";
import { OpenApi } from "@data/openapi/models/open-api";
import { Path as PathSchema } from "@data/openapi/schema/paths";
import * as Icon from "react-feather";
import { Link as LinkIcon } from "react-feather";
import { Link } from "react-router-dom";


type PathProps = {
    name: string;
    path: PathSchema;
}
export const Path = ({ name, path }: PathProps) => {
    const operations = OpenApi.ExtractOperationsFromPath(path);

    return (
        <li id={name} className={"flex flex-col items-start text-white w-full"}>
            <Link to={`paths/${encodeURIComponent(encodeURIComponent(name))}`} className={"group"}>
                <Span className={"flex flex-row items-center gap-4 py-4 underline group-hover:decoration-blue-300"}>
                    <Icon.ChevronsRight size={24}/>
                    {name}
                    <LinkIcon size={16} className={"group-hover:text-blue-400 transition"}/>
                </Span>
            </Link>
            {operations.map(([operationName, operation]) => <Operation name={operationName} operation={operation} key={operationName}/>)}
            <Divider.Dots/>
        </li>
    );
};

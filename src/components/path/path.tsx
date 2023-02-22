import { Divider } from "@components/divider";
import { Operation } from "@components/operation";
import { Span } from "@components/span";
import { OpenApi } from "@data/openapi/models/open-api";
import { Path as PathSchema } from "@data/openapi/schema/paths";
import * as Icon from "react-feather";


type PathProps = {
    name: string;
    path: PathSchema;
}
export const Path = ({ name, path }: PathProps) => {
    const operations = OpenApi.ExtractOperationsFromPath(path);

    return (
        <li id={name} className={"flex flex-col items-start text-white w-full px-8 max-w-screen-xl"}>
            <Span className={"flex flex-row items-center gap-6 py-4"}><Icon.ChevronsRight size={24}/>{name}</Span>
            {operations.map(([operationName, operation]) => <Operation name={operationName} operation={operation} key={operationName}/>)}
            <Divider.Dots/>
        </li>
    );
};

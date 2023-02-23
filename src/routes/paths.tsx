import { ConditionalRenderer, Paths as PathsComponent, TableOfContents } from "@components";
import { openApiContext } from "@context";
import { toPairs } from "lodash";
import { useContext } from "react";

const Paths = () => {
    const { apiData: { Paths: PathsData }, state } = useContext(openApiContext);
    const pathsPairs = toPairs(PathsData);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <TableOfContents className={"max-w-screen-xl w-full"} title={"All paths"} items={pathsPairs.map(([id]) => ({ id }))}/>
                <PathsComponent paths={pathsPairs}/>
            </div>
        </ConditionalRenderer>
    );
};

export default Paths;

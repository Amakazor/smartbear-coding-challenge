import { ConditionalRenderer, Paths as PathsComponent, TableOfContents } from "@components";
import { openApiContext } from "@context";
import { toPairs } from "lodash";
import { useContext } from "react";

export const Paths = () => {
    const { apiData: { Paths }, state } = useContext(openApiContext);
    const pathsData = toPairs(Paths);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <TableOfContents className={"max-w-screen-xl w-full"} title={"All paths"} items={pathsData.map(([id]) => ({ id }))}/>
                <PathsComponent paths={pathsData}/>
            </div>
        </ConditionalRenderer>
    );
};

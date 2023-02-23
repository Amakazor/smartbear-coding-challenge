import { ConditionalRenderer, Info, Paths as PathsComponent, TableOfContents } from "@components";
import { openApiContext } from "@context";
import { toPairs } from "lodash";
import { useContext } from "react";

export const Home = () => {
    const { apiData: { Paths }, state } = useContext(openApiContext);
    const pathsData = toPairs(Paths);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <Info/>
                <TableOfContents className={"max-w-screen-xl w-full"} items={pathsData.map(([id]) => ({ id }))}/>
                <PathsComponent title={"All paths"} paths={pathsData}/>
            </div>
        </ConditionalRenderer>
    );
};

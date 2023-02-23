import { ConditionalRenderer, Paths as PathsComponent } from "@components";
import { openApiContext } from "@context";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { toPairs } from "lodash";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

export const Path = () => {
    const pathId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    const { apiData: { Paths }, state } = useContext(openApiContext);
    const filteredData = toPairs(Paths).filter(([id]) => id === pathId);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <PathsComponent title={pathId} paths={filteredData} operationsOpen/>
            </div>
        </ConditionalRenderer>
    );
};

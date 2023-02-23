import { ConditionalRenderer, Paths as PathsComponent } from "@components";
import { openApiContext } from "@context";
import { DataState } from "@utility/data-state";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { TextHelper } from "@utility/text-helper";
import { toPairs } from "lodash";
import { useContext } from "react";
import { redirect, useLoaderData } from "react-router-dom";

export const Path = () => {
    const pathId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    const { apiData: { Paths }, state } = useContext(openApiContext);
    const filteredData = toPairs(Paths).filter(([id]) => TextHelper.clean(id) === pathId);

    if (state === DataState.Success && filteredData.length === 0) redirect("/paths");

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <PathsComponent title={filteredData[0]?.[0] ? `Operations for path '${filteredData[0][0]}'` : undefined} paths={filteredData} operationsOpen/>
            </div>
        </ConditionalRenderer>
    );
};

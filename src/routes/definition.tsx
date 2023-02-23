import { ConditionalRenderer, Definition as DefinitionComponent } from "@components";
import { openApiContext } from "@context";
import { DataState } from "@utility/data-state";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { TextHelper } from "@utility/text-helper";
import { toPairs } from "lodash";
import { useContext } from "react";
import { redirect, useLoaderData } from "react-router-dom";

export const Definition = () => {
    const definitionId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    const { apiData: { Definitions }, state } = useContext(openApiContext);
    const filteredData = toPairs(Definitions).filter(([id]) => TextHelper.clean(id) === definitionId);

    if (state === DataState.Success && filteredData.length === 0) redirect("/definitions");

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                {filteredData.map(([id, definition]) => (
                    <DefinitionComponent key={id} id={id} definition={definition} useDivider={false}/>
                ))}
            </div>
        </ConditionalRenderer>
    );
};

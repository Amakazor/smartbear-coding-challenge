import { ConditionalRenderer, Paths } from "@components";
import { openApiContext } from "@context";
import { DataState } from "@utility/data-state";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { TextHelper } from "@utility/text-helper";
import { toPairs } from "lodash";
import { useContext } from "react";
import { redirect, useLoaderData } from "react-router-dom";

const Tag = () => {
    const tagId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    const { apiData: { PathsByTags }, state } = useContext(openApiContext);
    const filteredData = toPairs(PathsByTags).filter(([tag]) => TextHelper.clean(tag) === tagId);

    if (state === DataState.Success && filteredData.length === 0) redirect("/tags");

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                {filteredData.map(([tag, paths]) => <Paths key={tag} title={`Paths for tag '${TextHelper.capitalizeFirstLetter(tag)}'`} paths={toPairs(paths)}/>)}
            </div>
        </ConditionalRenderer>
    );
};

export default Tag;

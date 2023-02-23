import { ConditionalRenderer } from "@components/conditional-renderer";
import { Paths as PathsComponent } from "@components/paths";
import { openApiContext } from "@context";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { TextHelper } from "@utility/text-helper";
import { toPairs } from "lodash";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

export const Tag = () => {
    const tagId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    const { apiData: { PathsByTags }, state } = useContext(openApiContext);

    const filteredData = toPairs(PathsByTags).filter(([tag]) => tag === tagId);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                {filteredData.map(([tag, paths]) => <PathsComponent key={tag} title={`Paths for tag '${TextHelper.capitalizeFirstLetter(tag)}'`} paths={toPairs(paths)}/>)}
            </div>
        </ConditionalRenderer>
    );
};

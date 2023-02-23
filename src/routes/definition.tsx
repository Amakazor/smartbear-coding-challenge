import { ConditionalRenderer, Definition as DefinitionComponent } from "@components";
import { openApiContext } from "@context";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { toPairs } from "lodash";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

export const Definition = () => {
    const definitionId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    const { apiData: { Definitions }, state } = useContext(openApiContext);
    const filteredDefinitionsData = toPairs(Definitions).filter(([id]) => id === definitionId);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                {filteredDefinitionsData.map(([id, definition]) => (
                    <DefinitionComponent key={id} id={id} definition={definition} useDivider={false}/>
                ))}
            </div>
        </ConditionalRenderer>
    );
};

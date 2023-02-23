import { ConditionalRenderer, Definition as DefinitionComponent, TableOfContents } from "@components";
import { openApiContext } from "@context";
import { toPairs } from "lodash";
import { useContext } from "react";

const Definitions = () => {
    const { apiData: { Definitions: DefinitionsData }, state } = useContext(openApiContext);
    const definitionPairs = toPairs(DefinitionsData);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <TableOfContents className={"max-w-screen-xl w-full"} title={"All definitions"} items={definitionPairs.map(([id]) => ({ id }))}/>
                {definitionPairs.map(([id, definition]) => (
                    <DefinitionComponent key={id} id={id} definition={definition}/>
                ))}
            </div>
        </ConditionalRenderer>
    );
};

export default Definitions;

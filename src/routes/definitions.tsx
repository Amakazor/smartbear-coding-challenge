import { ConditionalRenderer } from "@components/conditional-renderer";
import { Definition } from "@components/definition";
import { TableOfContents } from "@components/table-of-contents";
import { openApiContext } from "@context";
import { toPairs } from "lodash";
import { useContext } from "react";

export const Definitions = () => {
    const { apiData: { Definitions }, state } = useContext(openApiContext);
    const definitionsData = toPairs(Definitions);

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <TableOfContents className={"max-w-screen-xl w-full"} title={"All definitions"} items={definitionsData.map(([id]) => ({ id }))}/>
                {definitionsData.map(([id, definition]) => (
                    <Definition key={id} id={id} definition={definition}/>
                ))}
            </div>
        </ConditionalRenderer>
    );
};

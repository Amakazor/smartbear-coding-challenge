import { ConditionalRenderer } from "@components/conditional-renderer";
import { Paths as PathsComponent } from "@components/paths";
import { TableOfContents } from "@components/table-of-contents";
import { openApiContext } from "@context";
import { TextHelper } from "@utility/text-helper";
import { toPairs } from "lodash";
import { useContext } from "react";

export const Tags = () => {
    const { apiData: { PathsByTags }, state } = useContext(openApiContext);

    const tableOfContentsItems = toPairs(PathsByTags).map(([tag]) => ({
        id: TextHelper.clean(`Paths for tag '${TextHelper.capitalizeFirstLetter(tag)}'`),
        title: `Paths for tag '${TextHelper.capitalizeFirstLetter(tag)}'`,
    }));

    return (
        <ConditionalRenderer currentState={state}>
            <div className={"flex flex-col w-full items-center gap-12 max-w-screen-xl px-8 pt-8"}>
                <TableOfContents className={"max-w-screen-xl w-full"} title={"All paths sorted by tags"} items={tableOfContentsItems}/>
                {toPairs(PathsByTags).map(([tag, paths]) => <PathsComponent key={tag} title={`Paths for tag '${TextHelper.capitalizeFirstLetter(tag)}'`} paths={toPairs(paths)}/>)}
            </div>
        </ConditionalRenderer>
    );
};

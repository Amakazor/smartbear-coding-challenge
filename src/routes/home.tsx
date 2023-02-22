import { ConditionalRenderer } from "@components/conditional-renderer";
import { Gfm } from "@components/gfm";
import { Path } from "@components/path";
import { Span } from "@components/span";
import { TableOfContents } from "@components/table-of-contents";
import { openApiContext } from "@context/.";
import { toPairs } from "lodash";
import { useContext } from "react";

export const Home = () => {
    const openApiData = useContext(openApiContext);

    const paths = openApiData.apiData.Paths;

    return (
        <ConditionalRenderer currentState={openApiData.state}>
            <div className={"flex flex-col w-full items-center gap-12"}>
                <Span variant={"body-large"} className={"text-white max-w-screen-xl px-8"}>
                    {openApiData.apiData.Description && <Gfm data={openApiData.apiData.Description}/>}
                </Span>
                <TableOfContents className={"max-w-screen-xl w-full px-8"} items={toPairs(paths).map(([name]) => ({
                    id: name,
                    title: name,
                }))}/>
                <ul className={"w-full flex flex-col items-center"}>
                    {toPairs(paths).map(([name, path]) => <Path name={name} path={path} key={name}/>)}
                </ul>
            </div>
        </ConditionalRenderer>
    );
};

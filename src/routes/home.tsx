import { ConditionalRenderer } from "@components/conditional-renderer";
import { Path } from "@components/path";
import { openApiContext } from "@context/.";
import { toPairs } from "lodash";
import { useContext } from "react";

export const Home = () => {
    const openApiData = useContext(openApiContext);

    const paths = openApiData.apiData.Paths;

    return (
        <ConditionalRenderer currentState={openApiData.state}>
            <ul className={"w-full flex flex-col items-center"}>
                {toPairs(paths).map(([name, path]) => <Path name={name} path={path} key={name}/>)}
            </ul>
        </ConditionalRenderer>
    );
};

import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { useLoaderData } from "react-router-dom";

export const Path = () => {
    const pathId = useLoaderData() as ReturnType<typeof stringParameterLoader>;

    return (
        <div className={""}>
            Path
        </div>
    );
};

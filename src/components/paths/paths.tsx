import { Path } from "@components/path";
import { Span } from "@components/span";
import { Path as PathSchema } from "@data/openapi/schema/paths";


export type PathsProps = {
    paths: [string, PathSchema][];
    title?: string;
    operationsOpen?: boolean;
}

export const Paths = ({ paths, title, operationsOpen }: PathsProps) => {
    return (
        <div className={"w-full flex flex-col"}>
            {title && <Span variant={"title"} className={"my-4 self-center"}>{title}</Span>}
            <ul className={"flex flex-col items-center"}>
                {paths.map(([name, path]) => <Path operationsOpen={operationsOpen} name={name} path={path} key={name}/>)}
            </ul>
        </div>
    );
};

Paths.defaultProps = {
    title: undefined,
    operationsOpen: false,
};

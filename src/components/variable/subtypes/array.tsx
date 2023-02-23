import { ArraySchema } from "../schemas";
import { parseVariable } from "../variable";

type ArrayProps = {
    variable: ArraySchema
}

export const Array = ({ variable }: ArrayProps) => {
    const data = {
        name: null,
        variable: variable.items,
        parent: variable,
        addSemicolon: false,
    };

    return (
        <>{parseVariable(data)}</>
    );
};

import { ReactNode } from "react";

import { VariableSchema } from "../schemas";
import { Name, Semicolon, Separator } from "./.";

type WrapperProps = {
    children: ReactNode;
    name: string | null; variable: VariableSchema;
    parent: VariableSchema;
    addSemicolon: boolean
}

export const Wrapper = ({ children, name, variable, parent, addSemicolon }: WrapperProps) => {
    const nameElement = name && <Name name={name}/>;
    const separatorElement = name && <Separator variable={variable} name={name} parent={parent}/>;
    const semicolonElement = addSemicolon && <Semicolon/>;

    return <>{nameElement}{separatorElement}{children}{semicolonElement}</>;
};

Wrapper.defaultProps = {
    parent: undefined,
    addSemicolon: true,
};

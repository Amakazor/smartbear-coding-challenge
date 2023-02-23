
import { Wrapper } from "./additional-elements";
import { isArray, isObject, isPrimitive, isRef } from "./guards";
import { VariableSchema } from "./schemas";
import { Array, Object, Primitive, Ref } from "./subtypes";

export type VariableProps = {
    name: string | null;
    variable: VariableSchema;
    rootRequired?: boolean;
}

type ParserProps = {
    name: string | null;
    variable: VariableSchema;
    parent?: VariableSchema;
    addSemicolon?: boolean;
}

export const parseVariable = (data: ParserProps):JSX.Element => {

    if (isRef(data.variable))
        return (<Wrapper {...data}><Ref variable={data.variable}/></Wrapper>);

    if (isArray(data.variable))
        return (<Wrapper {...data}>[<Array variable={data.variable}/>]</Wrapper>);

    if (isObject(data.variable))
        return (<Wrapper {...data}>{"{"}<Object variable={data.variable}/>{"}"}</Wrapper>);

    if (isPrimitive(data.variable))
        return (<Wrapper {...data}><Primitive variable={data.variable}/></Wrapper>);

    return <></>;
};

export const Variable = ({ name, variable, rootRequired }: VariableProps) => {
    const parserData = {
        name,
        variable,
        parent: rootRequired ? { required: name ? [name] : [] } : undefined,
    };

    return <div>{parseVariable(parserData)}</div>;
};

Variable.defaultProps = { rootRequired: false };

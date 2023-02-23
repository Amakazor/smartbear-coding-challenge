
import { Enum, Format, Type } from "../additional-elements";
import { isFormattedPrimitive } from "../guards";
import { PrimitiveSchema } from "../schemas";

type PrimitiveProps = {
    variable: PrimitiveSchema
}

export const Primitive = ({ variable }: PrimitiveProps) => {
    const typeElement = <Type type={variable.type}/>;
    const formatElement = isFormattedPrimitive(variable) && <Format format={variable.format} />;
    const enumElement = variable.enum && <Enum enum={variable.enum} />;

    return <>{typeElement}{formatElement}{enumElement}</>;
};

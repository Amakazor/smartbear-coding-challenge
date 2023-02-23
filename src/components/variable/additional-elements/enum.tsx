import { Span } from "@components";

type EnumProps = {
    enum: string[] | number[] | boolean[];
}

export const Enum = ({ enum: enumValues }: EnumProps) => (
    <Span variant={"body-small"} className={"text-yellow-300"}>
        {" "}({enumValues.map(element => typeof element === "string" ? `"${element}"` : element).join(" | ")})
    </Span>
);

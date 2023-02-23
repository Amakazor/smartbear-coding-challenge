import { Span } from "@components";

type TypeElementProps = {
    type: string;
}

export const Type = ({ type }: TypeElementProps) => <Span variant={"body-small"} className={"text-blue-300"}>{type}</Span>;

import { Span } from "@components";

type FormatProps = {
    format: string;
}

export const Format = ({ format }: FormatProps) => <>(<Span variant={"body-small"} className={"text-purple-300"}>{format}</Span>)</>;

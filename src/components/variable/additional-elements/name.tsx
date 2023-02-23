import { Span } from "@components";

type NameProps = {
    name: string;
}

export const Name = ({ name }: NameProps) => <Span variant={"body-small"} className={"text-green-300"}>{name}</Span>;

Name.defaultProps = { name: null };

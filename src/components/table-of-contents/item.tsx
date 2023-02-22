import { Span } from "@components/span";
import { ArrowDown } from "react-feather";

export type TableOfContentsItem = {
    id: string;
    title?: string;
}

export type TableOfContentsItemProps = {
    item: TableOfContentsItem;
    index: number;
}

export const Item = ({ item:{ id, title }, index }: TableOfContentsItemProps) =>  (
    <li key={id} className={"py-1 group transition flex flex-row"}>
        <a href={`#${id}`}>
            <Span variant={"body-small"} className={"flex flex-row items-center gap-2"}>
                <span className={"min-w-[3ch]"}>{index + 1}.</span>
                <span>{title ?? id}</span>
                <ArrowDown size={16} className={"group-hover:text-blue-400 transition"}/>
            </Span>
        </a>
    </li>
);

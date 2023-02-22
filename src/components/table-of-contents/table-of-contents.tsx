import { Span } from "@components/span";
import * as Icon from "react-feather";

export type TableOfContentsItem = {
    id: string;
    title: string;
}

type TableOfContentsProps = {
    className?: string;
    items: TableOfContentsItem[];
}

export const TableOfContents = ({ className, items }: TableOfContentsProps) => {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <Span variant={"title"} className={"my-4"}>Table of Contents</Span>
            <ol className={"flex flex-col items-start text-white"}>
                {items.map((item, index) => (
                    <li key={item.id} className={"py-1 group transition flex flex-row"}>
                        <a href={`#${item.id}`}>
                            <Span variant={"body-small"} className={"flex flex-row items-center gap-2"}>
                                <span>{index + 1}.</span>
                                <span>{item.title}</span>
                                <Icon.ArrowDown size={16} className={"group-hover:text-blue-400 transition"}/>
                            </Span>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

TableOfContents.defaultProps = { className: "" };

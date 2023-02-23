import { Span } from "@components/span";

import { Item, TableOfContentsItem } from "./item";


type TableOfContentsProps = {
    className?: string;
    items: TableOfContentsItem[];
    title?: string;
}

export const TableOfContents = ({ className, items, title }: TableOfContentsProps) => {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <Span variant={"title"} className={"my-4 self-center"}>{title || "Table of Contents"}</Span>
            <ol className={"flex flex-col items-start text-white"}>
                {items.map((item, index) => <Item key={item.id} item={item} index={index}/>)}
            </ol>
        </div>
    );
};

TableOfContents.defaultProps = {
    className: "",
    title: undefined,
};

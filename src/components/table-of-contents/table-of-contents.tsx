import { Span } from "@components/span";

import { Item, TableOfContentsItem } from "./item";


type TableOfContentsProps = {
    className?: string;
    items: TableOfContentsItem[];
}

export const TableOfContents = ({ className, items }: TableOfContentsProps) => {
    return (
        <div className={`flex flex-col items-start ${className}`}>
            <Span variant={"title"} className={"my-4 self-center"}>Table of Contents</Span>
            <ol className={"flex flex-col items-start text-white"}>
                {items.map((item, index) => <Item key={item.id} item={item} index={index}/>)}
            </ol>
        </div>
    );
};

TableOfContents.defaultProps = { className: "" };

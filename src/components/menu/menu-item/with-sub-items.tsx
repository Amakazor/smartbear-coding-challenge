import { Span } from "@components/span/span";
import { useOpenable } from "@hooks";
import React from "react";
import * as Icon from "react-feather";

import { MenuItem, MenuItemBaseProps } from "./menu-item";

export type WithSubItemsProps = MenuItemBaseProps & {
    subItems: {
        title:string;
        url: string
    }[];
}

export const WithSubItems = ({ subItems, title, bold }: WithSubItemsProps) => {
    const { isOpen, close, open, toggle } = useOpenable(false);

    const subItemProps = {
        closeParent: close,
        tabbable: isOpen,
    };

    const subItemListVisibility = isOpen ? "block" : "hidden";
    const subItemsListBorder = isOpen ? "border-slate-500 md:border-y-2" : "";
    const chevronRotation = isOpen ? "rotate-180" : "";
    const isBold = bold ? "font-bold" : "";

    return (
        <div onMouseEnter={open} onMouseLeave={close} className={"md:hover:bg-gray-500"}>
            <MenuItem.Wrapper>
                <button type={"button"} className={"w-full outline-safe md:py-2"} onClick={toggle}>
                    <Span variant={"menu"} className={isBold}>
                        {title}
                        <Icon.ChevronDown className={`md:hidden ${chevronRotation} transition`}/>
                    </Span>
                </button>
            </MenuItem.Wrapper>
            <ul className={`md:absolute w-full left-0 top-full ${subItemsListBorder} ${subItemListVisibility}`}>
                {subItems.map((item) => <MenuItem.MenuSubItem {...item} {...subItemProps} key={item.title}/>)}
            </ul>
        </div>
    );
};

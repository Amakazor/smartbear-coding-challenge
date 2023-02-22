import { useMenuItems, useOpenable } from "@hooks/.";
import React, { useMemo } from "react";

import { MenuButton } from "./menu-button";
import { MenuItem } from "./menu-item";

export const Menu = () => {
    const { isOpen, toggle } = useOpenable(false);

    const menuItemsData = useMenuItems();
    const menuItemsDataString = JSON.stringify(menuItemsData);

    const menuItems = useMemo(() => menuItemsData.map((menuItem) => (
        <MenuItem {...menuItem} key={menuItem.title}/>
        // eslint-disable-next-line react-hooks/exhaustive-deps
    )), [menuItemsDataString]);

    return (
        <>
            <MenuButton toggleMenu={toggle} />
            <nav className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto md:flex-1`}>
                <ul className={"absolute md:static top-0.5 w-full md:w-auto flex flex-col md:flex-row overflow-hidden"}>
                    {menuItems}
                </ul>
            </nav>
        </>
    );
};

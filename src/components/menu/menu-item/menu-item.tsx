import React from "react";

import { SubItem } from "./sub-item";
import { WithSubItems,WithSubItemsProps } from "./with-sub-items";
import { WithoutSubItemProps, WithoutSubItems } from "./without-sub-items";
import { Wrapper } from "./wrapper";

export type MenuItemBaseProps = {
    title: string;
    bold?: boolean;
}

export type MenuItemProps = MenuItemBaseProps & (WithoutSubItemProps | WithSubItemsProps);

export const hasSubItems = (itemData: MenuItemProps): itemData is WithSubItemsProps =>
    (itemData as WithSubItemsProps).subItems !== undefined;

export const MenuItem = (props:MenuItemProps) => hasSubItems(props)
    ? <MenuItem.WithSubitems {...props}/>
    : <MenuItem.WithoutSubitems {...props}/>;

MenuItem.WithSubitems = WithSubItems;
MenuItem.WithoutSubitems = WithoutSubItems;
MenuItem.MenuSubItem = SubItem;
MenuItem.Wrapper = Wrapper;

MenuItem.defaultProps = {
    children: null,
    isSubItem: false,
    bold: false,
};

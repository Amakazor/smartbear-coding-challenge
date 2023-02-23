import React from "react";

import { WithSubItems, WithSubItemsProps } from "./with-sub-items";
import { WithoutSubItemProps, WithoutSubItems } from "./without-sub-items";

export type MenuItemBaseProps = {
    title: string;
    bold?: boolean;
}

export type MenuItemProps = MenuItemBaseProps & (WithoutSubItemProps | WithSubItemsProps);

export const hasSubItems = (itemData: MenuItemProps): itemData is WithSubItemsProps =>
    (itemData as WithSubItemsProps).subItems !== undefined;

export const MenuItem = (props:MenuItemProps) => hasSubItems(props)
    ? <WithSubItems {...props}/>
    : <WithoutSubItems {...props}/>;


MenuItem.defaultProps = {
    children: null,
    isSubItem: false,
    bold: false,
};

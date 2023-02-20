import { MenuItem } from "@components/menu/menu-item/menu-item";
import { WithoutSubItemProps } from "@components/menu/menu-item/without-sub-items";

export const SubItem = (props: WithoutSubItemProps) => <MenuItem.WithoutSubitems {...props} isSubItem/>;

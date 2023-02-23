import { MenuItemProps, WithoutSubItemProps } from "@components/menu/menu-item";
import { openApiContext } from "@context/.";
import { useContext } from "react";

const stringToMenuItem = (base: string, path: string, title?:string): WithoutSubItemProps => {
    return {
        title: title ?? path,
        url: `${base}/${encodeURIComponent(encodeURIComponent(path))}`,
    };
};

export const useMenuItems = () => {
    const openApi = useContext(openApiContext);

    const paths = openApi.apiData.PathNames.map((path) => stringToMenuItem("/paths", path));
    const tags = openApi.apiData.TagNames.map((tag) => stringToMenuItem("/tags", tag));
    const definitions = openApi.apiData.DefinitionNames.map((definition) => stringToMenuItem("/definitions", definition));

    const menuItems:MenuItemProps[] = [{
        title: "Paths",
        subItems: [{
            title: "Overview",
            url: "/paths",
            bold: true,
        }, ...paths],
    }, {
        title: "Tags",
        subItems: [{
            title: "Overview",
            url: "/tags",
            bold: true,
        }, ...tags],
    }, {
        title: "Definitions",
        subItems: [{
            title: "Overview",
            url: "/definitions",
            bold: true,
        }, ...definitions],
    }];

    return menuItems;
};

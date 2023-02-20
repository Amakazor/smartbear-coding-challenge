import { MenuItemProps, WithoutSubItemProps } from "@components/menu/menu-item";
import { openApiContext } from "@context/open-api-context";
import { useContext } from "react";

const stringToMenuItem = (base: string, path: string): WithoutSubItemProps => {
    return {
        title: path,
        url: `${base}/${encodeURIComponent(encodeURIComponent(path))}`,
    };
};

export const useMenuItems = () => {
    const openApi = useContext(openApiContext);

    const paths = openApi.PathNames.map((path) => stringToMenuItem("/paths", path));
    const tags = openApi.TagNames.map((tag) => stringToMenuItem("/tags", tag));
    const definitions = openApi.DefinitionNames.map((definition) => stringToMenuItem("/definitions", definition));
    const securityDefinitions = openApi.SecurityDefinitionNames.map((securityDefinition) => stringToMenuItem("/security-definitions", securityDefinition));

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
    }, {
        title: "Security Definitions",
        subItems: [{
            title: "Overview",
            url: "/security-definitions",
            bold: true,
        }, ...securityDefinitions],
    }];

    return menuItems;
};
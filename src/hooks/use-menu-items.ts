import { MenuItemProps, WithoutSubItemProps } from "@components/menu/menu-item";
import { openApiContext } from "@context/.";
import { TextHelper } from "@utility/text-helper";
import { useContext } from "react";

const stringToPath = (path: string) => (addBase: string): WithoutSubItemProps => ({
    title: path,
    url: `${addBase}/${TextHelper.clean(path)}`,
});

export const useMenuItems = () => {
    const openApi = useContext(openApiContext);

    const paths = openApi.apiData.PathNames.map(stringToPath).map(path => path("/paths"));

    const tags = openApi.apiData.TagNames.map(stringToPath).map(path => path("/tags"));

    const definitions = openApi.apiData.DefinitionNames.map(stringToPath).map(path => path("/definitions"));

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

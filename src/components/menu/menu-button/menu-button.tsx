import { Span } from "@components/span/span";
import React from "react";
import * as Icon from "react-feather";

type MenuButtonProps = {
    toggleMenu: () => void;
}

export const MenuButton = ({ toggleMenu }:MenuButtonProps) => {
    return (
        <Span variant="title" className={"md:hidden flex items-center pr-10"}>
            <button type={"button"} onClick={toggleMenu}>
                <Icon.Menu size={32}/>
            </button>
        </Span>
    );
};

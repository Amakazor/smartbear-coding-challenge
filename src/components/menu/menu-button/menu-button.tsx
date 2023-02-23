import { Span } from "@components";
import { Menu as MenuIcon } from "react-feather";

type MenuButtonProps = {
    toggleMenu: () => void;
}

export const MenuButton = ({ toggleMenu }:MenuButtonProps) => {
    return (
        <Span variant="title" className={"md:hidden flex items-center pr-10"}>
            <button type={"button"} onClick={toggleMenu}>
                <MenuIcon size={32}/>
            </button>
        </Span>
    );
};

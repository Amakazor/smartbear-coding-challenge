import { Span } from "@components";
import { useRef } from "react";
import { type FocusEvent } from "react";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";

import { MenuItemBaseProps } from "./menu-item";
import { Wrapper } from "./wrapper";

export type WithoutSubItemProps = MenuItemBaseProps & {
    url: string;
    isSubItem?: boolean;
    closeParent?: () => void;
    tabbable?: boolean;
}

export const WithoutSubItems = ({ url, title, isSubItem, closeParent, tabbable, bold }: WithoutSubItemProps) => {
    const element = useRef<HTMLAnchorElement | null>(null);

    const horizontalPadding = isSubItem ? "pr-20 pl-12" : "px-12";
    const chevronHidden = isSubItem ? "" : "md:hidden";
    const isBold = bold ? "font-bold" : "";

    const handleBlur = (event: FocusEvent<HTMLAnchorElement>) => {
        const elementParent = element.current?.parentElement?.parentElement;
        const nextElementParent = event.relatedTarget?.parentElement?.parentElement;

        if (elementParent !== nextElementParent && closeParent) closeParent();
    };

    return (
        <Wrapper isSubItem={isSubItem}>
            <Link to={url} onBlur={handleBlur} ref={element} className={"outline-safe md:py-2"} tabIndex={tabbable ? 0 : -1}>
                <Span variant={isSubItem ? "menu-small" : "menu"} className={`${horizontalPadding} ${isBold}`}>
                    {title}
                    <ChevronRight className={chevronHidden}/>
                </Span>
            </Link>
        </Wrapper>
    );
};

WithoutSubItems.defaultProps = {
    closeParent: undefined,
    tabbable: true,
    isSubItem: false,
};

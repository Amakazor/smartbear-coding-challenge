import { ReactNode } from "react";

type MenuItemWrapperProps = {
    children: ReactNode;
    isSubItem?: boolean;
}

export const Wrapper = ({ children, isSubItem }:MenuItemWrapperProps) => {
    const backgroundColor = isSubItem ? "bg-gray-600" : "bg-gray-700 md:bg-transparent";
    const borderColor = "border-b-slate-500 border-b-2 md:border-b-0";
    const width = isSubItem ? "w-full" : "w-full md:w-auto";

    return (
        <li className={`${width} ${backgroundColor} ${borderColor} md:hover:bg-gray-500`}>
            {children}
        </li>
    );
};

Wrapper.defaultProps = {
    onBlur: undefined,
    isSubItem: false,
};

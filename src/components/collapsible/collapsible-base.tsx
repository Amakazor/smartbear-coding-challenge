import React, { ReactNode } from "react";
import { ChevronDown } from "react-feather";

export type CollapsibleBaseProps = {
    header: ReactNode;
    children: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    className?: string;
    canOpen?: boolean;
    roundedBottom?: boolean;
    roundedTop?: boolean;
}

export const CollapsibleBase = ({ header, children, className, isOpen, toggle, canOpen, roundedTop, roundedBottom }: CollapsibleBaseProps) => {
    const chevronRotation = canOpen && isOpen ? "rotate-180" : "";

    const buttonProperties = canOpen ? { onClick: () => toggle() } : {
        "aria-hidden": true,
        tabIndex: -1,
        onClick: () => null,
    };

    return (
        <div className={`overflow-hidden w-full ${roundedBottom && "rounded-b-md" } ${roundedTop && "rounded-t-md"} ${className}`}>
            <button type={"button"} className={"flex flex-row items-center justify-between w-full bg-slate-700 scroll-my-4"} {...buttonProperties}>
                {header}
                {canOpen && <ChevronDown className={`transition-transform duration-300 md:mr-4 ${chevronRotation}`} />}
            </button>
            <div className={`${ canOpen && isOpen ? "h-auto p-4 border-2" : "h-0 invisible"} box-border bg-slate-800 border-t-0 ${roundedBottom && "rounded-b-md" } border-slate-700 overflow-hidden`}>
                {children}
            </div>
        </div>
    );
};

CollapsibleBase.defaultProps = {
    className: "",
    canOpen: true,
    roundedBottom: true,
    roundedTop: true,
};

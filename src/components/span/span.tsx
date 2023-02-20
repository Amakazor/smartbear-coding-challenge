import { ReactNode } from "react";

type SpanVariant = "title" | "body" | "menu" | "menu-small"

type SpanProps = {
    children?: ReactNode;
    variant: SpanVariant;
    className?: string;
}

const classNameLookup:Record<SpanVariant, string> = {
    "title": "text-2xl text-white font-bold",
    "body": "text-2xl text-gray-100",
    "menu": "text-2xl md:text-xl text-gray-100 flex items-center justify-between w-full px-12 md:px-3 lg:px-5 py-2",
    "menu-small": "text-lg text-gray-100 flex items-center justify-between w-full px-12 py-2",
};

export const Span = ({ children, variant, className }:SpanProps) => {
    return (
        <span className={`${classNameLookup[variant]} ${className}`}>
            {children}
        </span>
    );
};

Span.defaultProps = {
    children: null,
    variant: "body",
    className: "",
};

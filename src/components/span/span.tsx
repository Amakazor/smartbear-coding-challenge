import { HTMLProps, ReactNode } from "react";

export type SpanVariant = "title" | "body" | "body-small" | "body-large" | "body-very-large" | "menu" | "menu-small" | "body-uncolored" | "body-uncolored-small" | "method" | "operation-id"

type SpanProps = {
    children?: ReactNode;
    variant: SpanVariant;
    className?: string;
} & HTMLProps<HTMLSpanElement>

const classNameLookup:Record<SpanVariant, string> = {
    "title": "text-2xl text-white font-bold",
    "body": "text-lg text-gray-100",
    "body-small": "text-md text-gray-100",
    "body-large": "text-xl text-gray-100",
    "body-very-large": "text-2xl text-gray-100",
    "body-uncolored": "text-lg md:text-xl",
    "body-uncolored-small": "text-md md:text-lg",
    "menu": "text-2xl md:text-xl text-gray-100 flex items-center justify-between w-full px-12 md:px-3 lg:px-5 py-2",
    "menu-small": "text-lg text-gray-100 flex items-center justify-between w-full px-12 py-2",
    "method": "text-lg uppercase font-semibold text-white",
    "operation-id": "text-sm text-gray-400",
};

export const Span = ({ children, variant, className, ...props }:SpanProps) => {
    return (
        <span {...props} className={`${classNameLookup[variant]} ${className}`}>
            {children}
        </span>
    );
};

Span.defaultProps = {
    children: null,
    variant: "body",
    className: "",
};

import { Span, SpanVariant } from "@components";
import { ReactNode } from "react";

export type TextBoxProps = {
    children?: ReactNode;
    className?: string;
    horizontalVariant?: "ultra-narrow" | "narrow" | "wide" | "full";
    verticalVariant?: "narrow" | "wide";
    rounded?: boolean;
    textVariant?: SpanVariant;
}

const mapHorizontalVariantToGap = (horizontalVariant: TextBoxProps["horizontalVariant"]) => {
    switch (horizontalVariant) {
    case "ultra-narrow": {
        return "gap-0";
    }
    case "narrow": {
        return "gap-8";
    }
    case "wide":
    case "full": {
        return "gap-20";
    }}
};

export const TextBoxBase = ({ children, className, horizontalVariant, verticalVariant, rounded, textVariant }: TextBoxProps) => {
    const gap = mapHorizontalVariantToGap(horizontalVariant);
    const verticalPadding = verticalVariant === "narrow" ? "py-0 md:py-0.5" : "py-1 md:py-2";

    return (
        <div className={`border-solid border-2 ${rounded ? "rounded-md" : ""} ${horizontalVariant === "full" ? "w-full" : ""} ${className}`}>
            <Span variant={textVariant} className={`flex justify-between items-center font-semibold md:font-normal px-2 ${verticalPadding} ${gap}`}>
                {children}
            </Span>
        </div>
    );
};

TextBoxBase.defaultProps = {
    children: null,
    className: "",
    horizontalVariant: "wide",
    verticalVariant: "wide",
    rounded: true,
    textVariant: "body-uncolored",
};

type DividerVariant = "solid" | "dotted";

export type DividerProps = {
    className?: string;
    variant?: DividerVariant
}

const parseVariant = (variant?: DividerVariant) => {
    switch (variant) {
        case "dotted":return "border-dotted";
        default:return "border-solid";
    }
};

export const Divider = ({ className, variant }: DividerProps) => {
    return <hr className={`w-full ${parseVariant(variant)} border-t-2 ${className}`}/>;
};

Divider.defaultProps = {
    className: "",
    variant: "solid",
};

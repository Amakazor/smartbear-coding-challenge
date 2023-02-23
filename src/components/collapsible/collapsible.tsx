import { CollapsibleBase, CollapsibleBaseProps } from "@components";
import { useOpenable } from "@hooks";

type CollapsibleProps = Pick<CollapsibleBaseProps, "header" | "children" | "className"> & {
    startOpen?: boolean;
}

export const Collapsible = ({ children, header, className, startOpen }: CollapsibleProps) => {
    return <CollapsibleBase {...useOpenable(!!startOpen)} header={header} className={className}>{children}</CollapsibleBase>;
};

Collapsible.defaultProps = {
    className: "",
    startOpen: false,
};

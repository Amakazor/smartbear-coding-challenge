import { CollapsibleBase, CollapsibleBaseProps } from "@components";
import { useOpenable } from "@hooks";

type CollapsibleProps = Pick<CollapsibleBaseProps, "header" | "children" | "className"> & {
    openByDefault?: boolean;
}

export const Collapsible = ({ children, header, className, openByDefault }: CollapsibleProps) => {
    const { isOpen, toggle } = useOpenable(!!openByDefault);
    return <CollapsibleBase isOpen={isOpen} header={header} toggle={toggle} className={className}>{children}</CollapsibleBase>;
};

Collapsible.defaultProps = {
    className: "",
    openByDefault: false,
};

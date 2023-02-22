import { useOpenable } from "@hooks";

import { CollapsibleBase, CollapsibleBaseProps } from "./collapsible-base";

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

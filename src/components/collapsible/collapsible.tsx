import { useOpenable } from "@hooks";

import { CollapsibleBase, CollapsibleBaseProps } from "./collapsible-base";

type CollapsibleProps = Pick<CollapsibleBaseProps, "header" | "children" | "className">

export const Collapsible = ({ children, header, className }: CollapsibleProps) => {
    const { isOpen, toggle } = useOpenable(false);
    return <CollapsibleBase isOpen={isOpen} header={header} toggle={toggle} className={className}>{children}</CollapsibleBase>;
};

Collapsible.defaultProps = { className: "" };

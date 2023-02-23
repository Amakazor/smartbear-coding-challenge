import { CollapsibleBase } from "@components";
import { useOpenables } from "@hooks";
import { fromPairs } from "lodash";
import { ReactNode } from "react";

export type AccordionElement = {
    header: ReactNode;
    body: ReactNode;
    key: string;
}

export type AccordionProps = {
    collapsibles: AccordionElement[],
    exclusive?: boolean;
}

export const Accordion = ({ collapsibles, exclusive }: AccordionProps) => {

    const { openStates, close, closeAll, closeAllOpenOne, open } = useOpenables(fromPairs(collapsibles.map(({ key }) => [key, false])));

    const toggleElement = (key: string) => {
        if (openStates[key] && exclusive)
            return closeAll();

        if (openStates[key])
            return close(key);

        if (exclusive)
            return closeAllOpenOne(key);

        open(key);
    };

    return (
        <div>
            {collapsibles.map(({ header, body, key }, index) => {
                const borderBottom = index === collapsibles.length - 1 ? "" : "border-b-2 border-b-slate-500";

                const roundedBottom = index === collapsibles.length - 1;
                const roundedTop = index === 0;

                const styleProps = {
                    roundedBottom,
                    roundedTop,
                    className: borderBottom,
                };

                const toggle = () => toggleElement(key);

                return (
                    <CollapsibleBase {...styleProps} header={header} key={key} isOpen={openStates[key]} toggle={toggle} canOpen={body !== null}>
                        {body}
                    </CollapsibleBase>
                );
            })}
        </div>
    );
};

Accordion.defaultProps = { exclusive: true };

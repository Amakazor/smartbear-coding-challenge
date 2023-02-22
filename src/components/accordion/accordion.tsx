import { CollapsibleBase } from "@components/collapsible";
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

    const {
        isOpen,
        close,
        closeAll,
        closeAllOpenOne,
        open,
    } = useOpenables(fromPairs(collapsibles.map(({ key }) => [key, false])));

    const toggleElement = (key: string) => {
        if (isOpen[key] && exclusive)
            return closeAll();

        if (isOpen[key])
            return close(key);

        if (exclusive)
            return closeAllOpenOne(key);

        open(key);
    };

    return (
        <div>
            {collapsibles.map(({ header, body, key }, index) => {
                const borderBottom = index !== collapsibles.length - 1 ? "border-b-2 border-b-slate-500" : "";

                const roundedBottom = index === collapsibles.length - 1;
                const roundedTop = index === 0;
                const toggle = () => toggleElement(key);

                return (
                    // eslint-disable-next-line max-len
                    <CollapsibleBase header={header} key={key} isOpen={isOpen[key]} toggle={toggle} canOpen={body !== null} className={borderBottom} roundedBottom={roundedBottom} roundedTop={roundedTop}>
                        {body}
                    </CollapsibleBase>
                );
            })}
        </div>
    );
};

Accordion.defaultProps = { exclusive: true };

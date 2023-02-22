import { fromPairs, toPairs } from "lodash";
import { useState } from "react";

export const useOpenables = (initial: Record<string, boolean>) => {
    const [isOpen, setIsOpen] = useState(initial);

    const toggle = () => setIsOpen(fromPairs(toPairs(isOpen).map(([key, isOpen]) => [key, !isOpen])));

    const close = (element: string) => setIsOpen(fromPairs(toPairs(isOpen).map(([key, isOpen]) => [key, key === element ? false : isOpen])));
    const closeExcept = (element: string) => setIsOpen(fromPairs(toPairs(isOpen).map(([key, isOpen]) => [key, key === element ? isOpen : false])));
    const closeAll = () => setIsOpen(fromPairs(toPairs(isOpen).map(([key]) => [key, false])));
    const closeAllOpenOne = (element: string) => setIsOpen(fromPairs(toPairs(isOpen).map(([key]) => [key, key === element])));

    const open = (element: string) => setIsOpen(fromPairs(toPairs(isOpen).map(([key, isOpen]) => [key, key === element ? true : isOpen])));
    const openExcept = (element: string) => setIsOpen(fromPairs(toPairs(isOpen).map(([key, isOpen]) => [key, key === element ? isOpen : true])));
    const openAll = () => setIsOpen(fromPairs(toPairs(isOpen).map(([key]) => [key, true])));
    const openAllCloseOne = (element: string) => setIsOpen(fromPairs(toPairs(isOpen).map(([key]) => [key, key !== element])));

    return {
        isOpen,
        toggle,
        close,
        closeExcept,
        closeAll,
        closeAllOpenOne,
        open,
        openExcept,
        openAll,
        openAllCloseOne,
    };
};

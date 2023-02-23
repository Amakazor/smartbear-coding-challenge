import { mapValues } from "lodash";
import { useState } from "react";

export const useOpenables = (initial: Record<string, boolean>) => {
    const [isOpen, setIsOpen] = useState(initial);

    const update = (change: (key:string, isOpen: boolean) => boolean) => setIsOpen(mapValues(isOpen, (isOpen, key) => change(key, isOpen)));

    const toggle = () => update((_, isOpen) => !isOpen);

    const close = (element: string) => update((key, isOpen) => key === element ? false : isOpen);
    const closeExcept = (element: string) => update((key, isOpen) => key === element ? isOpen : false);
    const closeAllOpenOne = (element: string) => update((key) => key === element);
    const closeAll = () => update(() => false);

    const open = (element: string) => update((key, isOpen) => key === element ? true : isOpen);
    const openExcept = (element: string) => update((key, isOpen) => key === element ? isOpen : true);
    const openAllCloseOne = (element: string) => update((key) => key !== element);
    const openAll = () => update(() => true);

    return {
        isOpen,
        update,
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

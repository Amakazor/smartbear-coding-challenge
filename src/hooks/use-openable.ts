import { useState } from "react";

export const useOpenable = (initial: boolean) => {
    const [isOpen, setIsOpen] = useState(initial);
    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    return {
        isOpen,
        toggle,
        close,
        open,
    };
};

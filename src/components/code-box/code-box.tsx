import { ReactNode } from "react";

type CodeBoxProps = {
    className?: string;
    children?: ReactNode;
    inline?: boolean;
}

export const CodeBox = ({ className, children, inline }: CodeBoxProps) => {
    const commonStyle="bg-slate-600 border-slate-500 border-2 font-mono leading-relaxed rounded-md";

    return inline
        ? <code className={`${commonStyle} inline-block px-2" ${className}`}>{children}</code>
        : <pre className={`${commonStyle} block w-full p-2 md:p-4 ${className}`}><code>{children}</code></pre>;
};

CodeBox.defaultProps = {
    className: "",
    children: null,
    inline: false,
};

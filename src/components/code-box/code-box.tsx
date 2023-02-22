import { ReactNode } from "react";

type CodeBoxProps = {
    className?: string;
    children?: ReactNode;
}

export const CodeBox = ({ className, children }: CodeBoxProps) => {
    return (
        <div className={`bg-slate-600 border-slate-500 border-2 font-mono leading-relaxed p-2 md:p-4 w-full rounded-md ${className}`}>
            {children}
        </div>
    );
};

CodeBox.defaultProps = {
    className: "",
    children: null,
};

import { XCircle } from "react-feather";

import { TextBoxBase, TextBoxProps } from "./text-box-base";

export const Error = ({ children, className, ...props }: TextBoxProps) => {
    return (
        <TextBoxBase {...props} className={`border-red-600 bg-red-300 text-red-600 ${className}`}>
            {children}
            <XCircle size={32} className={"inline-block ml-2 scale-75 md:scale-100 shrink-0"}/>
        </TextBoxBase>
    );
};

Error.defaultProps = { className: "" };

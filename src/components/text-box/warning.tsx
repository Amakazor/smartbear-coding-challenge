import { AlertCircle } from "react-feather";

import { TextBoxBase, TextBoxProps } from "./text-box-base";

export const Warning = ({ children, className, ...props }: TextBoxProps) => {
    return (
        <TextBoxBase {...props} className={`border-yellow-500 bg-yellow-100 text-yellow-600 ${className}`}>
            {children}
            <AlertCircle size={32} className={"inline-block ml-2 scale-75 md:scale-100 shrink-0"}/>
        </TextBoxBase>
    );
};

Warning.defaultProps = { className: "" };

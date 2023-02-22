import  * as Icon from "react-feather";

import { TextBoxBase, TextBoxProps } from "./text-box-base";

export const Success = ({ children, className, ...props }: TextBoxProps) => {
    return (
        <TextBoxBase {...props} className={`border-green-600 bg-green-300 text-green-600 ${className}`}>
            {children}
            <Icon.CheckCircle size={32} className={"inline-block ml-2 scale-75 md:scale-100 transform-gpu shrink-0"}/>
        </TextBoxBase>
    );
};

Success.defaultProps = { className: "" };

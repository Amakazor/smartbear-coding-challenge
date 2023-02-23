import { Info as InfoIcon } from "react-feather";

import { TextBoxBase, TextBoxProps } from "./text-box-base";

export const Info = ({ children, className, ...props }: TextBoxProps) => {
    return (
        <TextBoxBase {...props} className={`border-blue-600 bg-blue-300 text-blue-600 ${className}`}>
            {children}
            <InfoIcon size={32} className={"inline-block ml-2 scale-75 md:scale-100 shrink-0"}/>
        </TextBoxBase>
    );
};

Info.defaultProps = { className: "" };

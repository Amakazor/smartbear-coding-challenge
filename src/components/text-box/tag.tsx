import { Tag as TagIcon } from "react-feather";

import { TextBoxBase, TextBoxProps } from "./text-box-base";

export const Tag = ({ children, className, ...props }: TextBoxProps) => {
    return (
        <TextBoxBase {...props} horizontalVariant={"ultra-narrow"} verticalVariant={"narrow"} rounded={false} textVariant={"body-uncolored-small"}
            className={`border-sky-200 hover:border-sky-400 transition !border-0 !border-b-2 bg-transparent text-sky-200 md:min-w-[6rem] group ${className}`}
        >
            {children}
            <TagIcon size={20} className={"inline-block ml-2 scale-75 md:scale-100 shrink-0 group-hover:text-sky-400 transition"}/>
        </TextBoxBase>
    );
};

Tag.defaultProps = { className: "" };

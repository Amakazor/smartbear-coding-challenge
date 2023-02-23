import { Span } from "@components";

import { TextBoxBase } from "../text-box-base";

export type MethodProps = {
    className?: string;
}

type MethodBoxProps = {
    method: string;
    className: string;
}

export const MethodBase = ({ method, className }: MethodBoxProps) => {
    return (
        <TextBoxBase rounded={false} className={`flex items-center justify-center w-24 self-stretch ${className}`}>
            <Span variant={"method"}>{method}</Span>
        </TextBoxBase>
    );
};

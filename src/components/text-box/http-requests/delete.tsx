import { MethodBase, MethodProps } from "./method-base";

export const Delete = ({ className }:MethodProps) => <MethodBase className={`border-red-500 bg-red-500 text-red-100 ${className}`} method={"DELETE"}/>;

Delete.defaultProps = { className: "" };

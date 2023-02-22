import { MethodBase, MethodProps } from "./method-base";

export const Put = ({ className }:MethodProps) => <MethodBase className={`border-yellow-500 bg-yellow-500 text-yellow-100 ${className}`} method={"PUT"}/>;

Put.defaultProps = { className: "" };

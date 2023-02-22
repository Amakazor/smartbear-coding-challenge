import { MethodBase, MethodProps } from "./method-base";

export const Patch = ({ className }:MethodProps) => <MethodBase className={`border-teal-500 bg-teal-500 text-teal-100 ${className}`} method={"PATCH"}/>;

Patch.defaultProps = { className: "" };

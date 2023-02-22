import { MethodBase, MethodProps } from "./method-base";

export const Get = ({ className }:MethodProps) => <MethodBase className={`border-blue-500 bg-blue-500 text-blue-100 ${className}`} method={"GET"}/>;

Get.defaultProps = { className: "" };

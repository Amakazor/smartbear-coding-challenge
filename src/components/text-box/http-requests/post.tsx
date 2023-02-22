import { MethodBase, MethodProps } from "./method-base";

export const Post = ({ className }:MethodProps) => <MethodBase className={`border-emerald-500 bg-emerald-500 text-emerald-100 ${className}`} method={"POST"}/>;

Post.defaultProps = { className: "" };

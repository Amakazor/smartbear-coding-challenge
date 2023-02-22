import { ReactNode } from "react";
import { ExternalLink as Link, Mail, Phone } from "react-feather";

type ExternalLinkProps = {
    className?: string;
    children: ReactNode
    href: string;
    variant?: "mail" | "link" | "phone"
}

const getPrefix = (variant: ExternalLinkProps["variant"]) => {
    switch (variant) {
    case "mail":
        return "mailto:";
    case "phone":
        return "tel:";
    default:
        return "";
    }
};

const getIcon = (variant: ExternalLinkProps["variant"]) => {
    switch (variant) {
    case "mail":
        return <Mail size={16} className={"inline-block ml-1 mb-4 group-hover:text-blue-300"}/>;
    case "phone":
        return <Phone size={16} className={"inline-block ml-1 mb-4 group-hover:text-blue-300"}/>;
    default:
        return <Link size={16} className={"inline-block ml-1 mb-4 group-hover:text-blue-300"}/>;
    }
};


export const ExternalLink = ({ className, children, href, variant }: ExternalLinkProps) => {
    return (
        <a href={`${getPrefix(variant)}${href}`} className={`underline group hover:decoration-blue-300 ${className}`}>
            {children}
            {getIcon(variant)}
        </a>
    );
};

ExternalLink.defaultProps = {
    className: "",
    variant: "link",
};

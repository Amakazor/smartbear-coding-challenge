import { CodeBox } from "@components/code-box";
import { TextHelper } from "@utility/text-helper";
import { Code, InlineCode, Link, Node, Paragraph, Parent, Root, Text } from "@yozora/ast";
import GfmParser from "@yozora/parser-gfm";
import { ExternalLink } from "react-feather";

type GfmProps = {
    data: string;
}

const parseGfmNode = (node: Node) => {
    const key = TextHelper.hash(JSON.stringify(node));

    if (isRoot(node)) {
        return <span key={key}>{handleChildren(node)}</span>;
    }

    if (isParagraph(node)) {
        return <p key={key}>{handleChildren(node)}</p>;
    }

    if (isText(node)) {
        return <span key={key}>{node.value}</span>;
    }

    if (isCode(node)) {
        return <CodeBox key={key}>{node.value}</CodeBox>;
    }

    if (isInlineCode(node)) {
        return <CodeBox key={key} inline>{node.value}</CodeBox>;
    }

    if (isLink(node)) {
        return (
            <a key={key} href={node.url} className={"underline group hover:decoration-blue-300"}>
                {handleChildren(node)}
                <ExternalLink size={16} className={"inline-block ml-1 mb-4 group-hover:text-blue-300"}/>
            </a>
        );
    }

    return <span key={key}>Unknown</span>;
};

const isRoot = (node: Node): node is Root => node.type === "root";
const isParagraph = (node: Node): node is Paragraph => node.type === "paragraph";
const isText = (node: Node): node is Text => node.type === "text";
const isLink = (node: Node): node is Link => node.type === "link";
const isInlineCode = (node: Node): node is InlineCode => node.type === "inlineCode";
const isCode = (node: Node): node is Code => node.type === "code";

const isParentNode = (node: Node): node is Parent => {
    return "children" in node;
};

const handleChildren = (parent: Node) => {
    if (isParentNode(parent)) return parent.children.map((node) => parseGfmNode(node));
    return null;
};

export const Gfm = ({ data }: GfmProps) => {
    return parseGfmNode(new GfmParser().parse(data));
};

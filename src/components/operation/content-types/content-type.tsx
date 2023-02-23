import { CodeBox, Span } from "@components";

type OperationContentTypesProps = {
    contentTypes: string[];
    variant: "Consumes" | "Produces";
}

export const ContentType = ({ variant, contentTypes }:OperationContentTypesProps) => {
    return (
        <div className={"flex flex-col grow"}>
            <Span>{variant} content types:</Span>
            <CodeBox className={"grow"}>
                {contentTypes.map((type) => (<Span key={type} variant={"body-small"} className={"text-green-300 block"}>{type}</Span>))}
            </CodeBox>
        </div>
    );
};

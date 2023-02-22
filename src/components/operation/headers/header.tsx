import { Span } from "@components/span";
import { TextBox } from "@components/text-box";
import { OperationMethod } from "@data/openapi/schema/paths";
import { Link } from "react-router-dom";

type PathHeaderProps = {
    name: OperationMethod;
    pathName: string;
    tags?: string[];
}

const operationMethodToTextBox = (method: OperationMethod) => {
    switch (method) {
    case "get": {
        return <TextBox.HTTP.Get className={"shrink-0"}/>;
    }
    case "post": {
        return <TextBox.HTTP.Post className={"shrink-0"}/>;
    }
    case "put": {
        return <TextBox.HTTP.Put className={"shrink-0"}/>;
    }
    case "delete": {
        return <TextBox.HTTP.Delete className={"shrink-0"}/>;
    }
    case "options": {
        return <TextBox.HTTP.Get className={"shrink-0"}/>;
    }
    case "head": {
        return <TextBox.HTTP.Get className={"shrink-0"}/>;
    }
    case "patch": {
        return <TextBox.HTTP.Patch className={"shrink-0"}/>;
    }}
};

export const Header = ({ name, pathName, tags }: PathHeaderProps) => {
    return (
        <div className={"flex flex-row items-center justify-between text-white w-full mr-2 md:mr-4"}>
            <div className={"flex flex-row items-center gap-2 md:gap-4"}>
                {operationMethodToTextBox(name)}
                <Span variant={"body-uncolored-small"} className={"text-left"}>{pathName}</Span>
            </div>
            {(tags ?? []).map(tag => <Link to={`/tags/${tag}`} key={tag}><TextBox.Tag className={"shrink-0"}>{tag}</TextBox.Tag></Link>)}
        </div>
    );
};

Header.defaultProps = { tags: [] };

import { ContentType } from "./content-type";

type OperationContentTypesProps = {
    consumes: string[] | undefined;
    produces: string[] | undefined;
}

export const ContentTypes = ({ consumes, produces }: OperationContentTypesProps) => {
    return (
        <div className={"flex flex-col md:flex-row gap-4 justify-stretch self-stretch"}>
            {consumes && <ContentType variant={"Consumes"} contentTypes={consumes}/>}
            {produces && <ContentType variant={"Produces"} contentTypes={produces}/>}
        </div>
    );
};

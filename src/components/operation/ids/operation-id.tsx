import { Span } from "@components";

type OperationIdProps = {
    operationId: string;
}

export const OperationId = ({ operationId }: OperationIdProps) => {
    return (
        <div className={"self-end absolute -top-5"}>
            <Span variant={"operation-id"}>ID: </Span>
            <Span variant={"operation-id"}>{operationId}</Span>
        </div>
    );
};

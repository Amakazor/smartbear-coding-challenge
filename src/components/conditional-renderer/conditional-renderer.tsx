import { Loader, TextBox } from "@components";
import { DataState } from "@utility/data-state";
import { ReactNode } from "react";

export type ConditionalRendererProps = {
    children: ReactNode;
    currentState: DataState;
}

export const ConditionalRenderer = ({ children, currentState }: ConditionalRendererProps) => {
    switch (currentState) {
        case DataState.Loading: {
            return <Loader/>;
        }
        case DataState.FetchingError: {
            return <TextBox.Error>Unexpected error has occurred while fetching documentation, try again later</TextBox.Error>;
        }
        case DataState.ParsingError: {
            return <TextBox.Error>Unexpected error has occurred while parsing documentation, try again later</TextBox.Error>;
        }
        case DataState.Success: {
            return <>{children}</>;
        }}
};

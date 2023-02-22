import { ReactNode } from "react";

export type MainProps = {
    children?: ReactNode;
}

export const Main = ({ children }:MainProps) => (
    <main className={"flex flex-col flex-grow items-center py-4"}>
        {children}
    </main>
);

Main.defaultProps = { children: null };

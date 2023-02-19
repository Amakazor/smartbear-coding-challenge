import { ReactNode } from "react";

export type MainProps = {
    children?: ReactNode;
}

export const Main = ({ children }:MainProps) => (
    <main>
        {children}
    </main>
);

Main.defaultProps = { children: null };

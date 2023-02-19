import { Main } from "@components/main";
import { Menu } from "@components/menu";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
    <div className={"min-h-screen font-sans"}>
        <Menu/>
        <Main>
            <Outlet/>
        </Main>
    </div>
);

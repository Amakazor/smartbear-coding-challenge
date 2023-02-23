import { Header, Main } from "@components";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
    <div className={"min-h-screen font-sans bg-slate-900 flex flex-col"}>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
    </div>
);

import { Header } from "@components/header/header";
import { Main } from "@components/main";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
    <div className={"min-h-screen font-sans bg-slate-900"}>
        <Header/>
        <Main>
            <Outlet/>
        </Main>
    </div>
);

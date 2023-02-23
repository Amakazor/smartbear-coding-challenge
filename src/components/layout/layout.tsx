import { Header, Loader, Main } from "@components";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
    <div className={"min-h-screen font-sans bg-slate-900 flex flex-col"}>
        <Header/>
        <Main>
            <Suspense fallback={(
                <div className={"text-6xl text-red-600 font-bold flex justify-center items-center min-h-screen font-sans"}>
                    <Loader/>
                </div>
            )}>
                <Outlet/>
            </Suspense>
        </Main>
    </div>
);

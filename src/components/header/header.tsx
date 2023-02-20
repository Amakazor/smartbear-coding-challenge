import { Menu } from "@components/menu";
import { Span } from "@components/span";
import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <header className={"flex justify-between bg-slate-700 border-b-slate-500 border-b-2 sticky"}>
            <Link to={"/"} className={"hover:bg-gray-500 flex shrink-0 block"}>
                <Span variant="title" className={"py-4 px-10"}>The Api Docs App</Span>
            </Link>
            <Menu/>
        </header>
    );
};

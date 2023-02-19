import { Layout } from "@components/layout";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
        ],
        errorElement: (
            <div className={"text-6xl text-red-600 font-bold flex justify-center items-center min-h-screen font-sans"}>
                404
            </div>
        ),
    },
]);

export const Router = () => <RouterProvider router={router}/>;

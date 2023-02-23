import { Layout } from "@components";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@routes/home"));
const Paths = lazy(() => import("@routes/paths"));
const Path = lazy(() => import("@routes/path"));
const Tags = lazy(() => import("@routes/tags"));
const Tag = lazy(() => import("@routes/tag"));
const Definitions = lazy(() => import("@routes/definitions"));
const Definition = lazy(() => import("@routes/definition"));

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [{
            path: "/",
            element: <Home/>,
        }, {
            path: "/paths",
            element: <Paths/>,
        }, {
            path: "/paths/:pathId",
            element: <Path/>,
            loader: ({ params }) => stringParameterLoader(params, "pathId"),
        }, {
            path: "/tags",
            element: <Tags/>,
        }, {
            path: "/tags/:tagId",
            element: <Tag/>,
            loader: ({ params }) => stringParameterLoader(params, "tagId"),
        }, {
            path: "/definitions",
            element: <Definitions/>,
        }, {
            path: "/definitions/:definitionId",
            element: <Definition/>,
            loader: ({ params }) => stringParameterLoader(params, "definitionId"),
        }],
        errorElement: (
            <div className={"text-6xl text-red-600 font-bold flex justify-center items-center min-h-screen font-sans"}>
                404
            </div>
        ),
    },
]);

export const Router = () => <RouterProvider router={router}/>;
